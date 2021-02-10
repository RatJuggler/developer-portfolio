package com.portfolio.simple.rest;

import com.portfolio.simple.domain.Career;
import com.portfolio.simple.repository.CareerRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CareerResource {

    private final CareerRepository repository;

    public CareerResource(final CareerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/career")
    public List<Career> career() {
        List<Career> career = new ArrayList<>();
        this.repository.findAll().forEach(career::add);
        return career;
    }
}
