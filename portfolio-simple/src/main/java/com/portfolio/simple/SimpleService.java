package com.portfolio.simple;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.map.repository.config.EnableMapRepositories;

@SpringBootApplication
@EnableMapRepositories
public class SimpleService {

	public static void main(String[] args) {
		SpringApplication.run(SimpleService.class, args);
	}
}
