package com.wee.dm.repository;

import com.wee.dm.entity.DmMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DmMessageRepository extends JpaRepository<DmMessage, Long> {
	List<DmMessage> findBySenderIdOrReceiverIdOrderBySentAtDesc(String senderId, String receiverId);
	List<DmMessage> findByIsReadFalseAndReceiverId(String receiverId);
} 