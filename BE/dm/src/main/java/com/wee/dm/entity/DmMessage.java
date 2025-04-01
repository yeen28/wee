package com.wee.dm.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@Table(name = "dm_messages")
public class DmMessage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String senderId;
	private String receiverId;
	private String content;
	private LocalDateTime sentAt;
	private boolean isRead;
	
	@Version
	private Long version;  // 낙관적 락을 위한 버전
} 