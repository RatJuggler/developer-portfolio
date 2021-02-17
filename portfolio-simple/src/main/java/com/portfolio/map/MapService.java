package com.portfolio.map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.map.repository.config.EnableMapRepositories;

@SpringBootApplication
@EnableMapRepositories
public class MapService {

	public static void main(String[] args) {
		SpringApplication.run(MapService.class, args);
	}
}
