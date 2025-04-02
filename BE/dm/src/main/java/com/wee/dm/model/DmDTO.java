package com.wee.dm.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DmDTO {
	private Long id;
	private String senderId;
	private String receiverId;
	private String content;
	private String sentAt;
	private boolean isRead;
	
	// 기존 생성자도 유지
	public DmDTO(int id, String name, String avatar, String preview, String time, String messages) {
		this.id = (long) id;
		this.senderId = name;    // 임시로 기존 필드와 매핑
		this.content = preview;  // 임시로 기존 필드와 매핑
		this.sentAt = time;      // 임시로 기존 필드와 매핑
	}
}
