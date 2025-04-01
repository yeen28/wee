package com.wee.dm.publisher;

import com.wee.dm.model.DmDTO;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
public class DmPublisher {
    private final RabbitTemplate rabbitTemplate;

    public DmPublisher(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void publishDm(DmDTO dm) {
        rabbitTemplate.convertAndSend("dm.exchange", "dm.routing.key", dm);
    }
} 