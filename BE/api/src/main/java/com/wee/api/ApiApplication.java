package com.wee.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.wee.api", "com.wee.dm", "com.wee.common"}) // 여러 모듈의 패키지를 추가
// @ComponentScan(basePackageClasses = {ApiApplication.class, DmMarker.class, CommonMarker.class})
@EntityScan(basePackages = {"com.wee.api", "com.wee.dm", "com.wee.common"})
@EnableJpaRepositories(basePackages = {"com.wee.api", "com.wee.dm", "com.wee.common"})
public class ApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}
}
