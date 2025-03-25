package com.wee.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class NotificationDTO {
	private int id;
	private String title;
	private String message;
	private String timestamp;
	private String image;
	private String link;
}
