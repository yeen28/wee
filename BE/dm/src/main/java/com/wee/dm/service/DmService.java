package com.wee.dm.service;

import com.wee.dm.entity.DmMessage;
import com.wee.dm.model.DmDTO;
import com.wee.dm.repository.DmMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class DmService {
	private final RabbitTemplate rabbitTemplate;
	private final DmMessageRepository messageRepository;
	private final SimpMessagingTemplate websocket;

	/**
	 * DB에 값이 추가되면 FE에 전달
	 * @return
	 */
	public List<DmDTO> getDm() {
		// TODO mock data
		/*
          { id: 1, text: '안녕하세요!', time: '10:30', isUser: false },
          { id: 2, text: '안녕하세요! 반가워요', time: '10:31', isUser: true }
	 */
		List<DmDTO> notifications = new ArrayList<>();
		notifications.add(new DmDTO(1, "BTS", "💜", "안녕하세요!", "10:30", "{ \"id\": 4, \"text\": '오늘도 좋은 하루 되세요!', \"time\": '어제', \"isUser\": false }"));
		notifications.add(new DmDTO(2, "SEVENTEEN", "💎", "새로운 콘텐츠가 업로드되었습니다.", "09:15", "{ \"id\": 4, \"text\": '오늘도 좋은 하루 되세요!', \"time\": '어제', \"isUser\": false }"));
		//{ id: 3, text: '새로운 콘텐츠가 업로드되었습니다.', time: '09:15', isUser: false }
		notifications.add(new DmDTO(3, "NewJeans", "🐰", "오늘도 좋은 하루 되세요!", "어제", "{ \"id\": 4, \"text\": '오늘도 좋은 하루 되세요!', \"time\": '어제', \"isUser\": false }"));
		return notifications;
	}

	@Transactional
	@Retryable(maxAttempts = 3)
	public void sendMessage(DmDTO dmDTO) {
		// 1. 메시지 저장
		DmMessage message = convertToEntity(dmDTO);
		messageRepository.save(message);

		// 2. RabbitMQ로 발행
		rabbitTemplate.convertAndSend("dm.exchange", "dm.routing.key", dmDTO);

		// 3. WebSocket으로 실시간 전송
		websocket.convertAndSend("/topic/messages/" + dmDTO.getReceiverId(), dmDTO);
	}

	@RabbitListener(queues = "dm.queue")
	public void receiveDm(DmDTO message) {
		try {
			// 1. 메시지 저장
			DmMessage dmMessage = convertToEntity(message);
			messageRepository.save(dmMessage);

			// 2. WebSocket으로 실시간 전송
			websocket.convertAndSend("/topic/messages/" + message.getReceiverId(), message);
		} catch (Exception e) {
			// 에러 로깅 및 처리
			throw new RuntimeException("Message processing failed", e);
		}
	}

	@Transactional
	public void markAsRead(Long messageId) {
		messageRepository.findById(messageId)
				.ifPresent(message -> {
					message.setRead(true);
					messageRepository.save(message);
				});
	}

	private DmMessage convertToEntity(DmDTO dto) {
		DmMessage entity = new DmMessage();
		// DTO to Entity 변환 로직
		return entity;
	}
}
