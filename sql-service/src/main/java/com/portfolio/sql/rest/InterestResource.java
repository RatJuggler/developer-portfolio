package com.portfolio.sql.rest;

import com.portfolio.sql.domain.Interest;
import com.portfolio.sql.repository.InterestRepository;

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
