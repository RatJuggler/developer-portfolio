package com.portfolio.sql.rest;

import com.portfolio.sql.domain.Career;
import com.portfolio.sql.repository.CareerRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CareerResource {

    private final CareerRepository repository;

    public CareerResource(final CareerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/career")
    public Iterable<Career> career() {
        return this.repository.findAll();
    }
}
