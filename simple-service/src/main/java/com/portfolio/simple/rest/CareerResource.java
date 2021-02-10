package com.portfolio.simple.rest;

import com.portfolio.simple.domain.Career;
import com.portfolio.simple.repository.CareerRepository;

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
