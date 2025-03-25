package com.wee.api.controller;

import com.wee.api.model.NotificationDTO;
import com.wee.api.service.NotificationService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class NotificationsController {
	private final NotificationService notificationService;

	@Operation(summary = "Get notifications")
	@GetMapping("/notifications")
	public ResponseEntity<List<NotificationDTO>> getNotifications() {
		List<NotificationDTO> notifications = notificationService.getNotifications();
		return ResponseEntity.ok(notifications);
	}
} 