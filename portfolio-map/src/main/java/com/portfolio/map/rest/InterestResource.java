package com.portfolio.map.rest;

import com.portfolio.map.domain.Interest;
import com.portfolio.map.repository.InterestRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InterestResource {

    private final InterestRepository repository;

    public InterestResource(final InterestRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/interests")
    public Iterable<Interest> interests() {
        return this.repository.findAll();
    }
}
