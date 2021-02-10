package com.portfolio.simple.rest;

import com.portfolio.simple.domain.Interest;
import com.portfolio.simple.repository.InterestRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class InterestResource {

    private final InterestRepository repository;

    public InterestResource(final InterestRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/interests")
    public List<Interest> interests() {
        List<Interest> interests = new ArrayList<>();
        this.repository.findAll().forEach(interests::add);
        return interests;
    }
}
