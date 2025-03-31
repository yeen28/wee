package com.wee.dm.service;

import com.wee.dm.model.DmDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DmService {
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
}
