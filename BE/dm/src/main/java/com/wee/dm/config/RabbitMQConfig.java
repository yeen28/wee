package com.wee.dm.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {
	public static final String DM_QUEUE = "dm.queue";
	public static final String DM_EXCHANGE = "dm.exchange";
	public static final String DM_ROUTING_KEY = "dm.routing.key";

	@Bean
	public Queue dmQueue() {
		return new Queue(DM_QUEUE);
	}

	@Bean
	public TopicExchange dmExchange() {
		return new TopicExchange(DM_EXCHANGE);
	}

	@Bean
	public Binding binding() {
		return BindingBuilder
				.bind(dmQueue())
				.to(dmExchange())
				.with(DM_ROUTING_KEY);
	}

	@Bean
	public Jackson2JsonMessageConverter messageConverter() {
		return new Jackson2JsonMessageConverter();
	}

	@Bean
	public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
		RabbitTemplate template = new RabbitTemplate(connectionFactory);
		template.setMessageConverter(messageConverter());
		return template;
	}
} 