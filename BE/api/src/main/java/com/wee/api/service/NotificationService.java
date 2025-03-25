package com.wee.api.service;

import com.wee.api.model.NotificationDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NotificationService {
	/**
	 * DB에 값이 추가되면 FE에 전달
	 * @return
	 */
	public List<NotificationDTO> getNotifications() {
		// TODO mock data
		List<NotificationDTO> notifications = new ArrayList<>();
		notifications.add(new NotificationDTO(1, "BTS", "새로운 포스트가 업로드되었습니다.", "10분 전", "https://via.placeholder.com/48", "/bts"));
		notifications.add(new NotificationDTO(2, "SEVENTEEN", "라이브 스트리밍이 시작되었습니다.", "1시간 전", "https://via.placeholder.com/48", "/l"));
		notifications.add(new NotificationDTO(3, "LE SSERAFIM", "새로운 콘텐츠가 추가되었습니다.", "2시간 전", "https://via.placeholder.com/48", "/se"));
		return notifications;
	}
}
