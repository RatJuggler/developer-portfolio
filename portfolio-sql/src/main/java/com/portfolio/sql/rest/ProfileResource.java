package com.portfolio.sql.rest;

import com.portfolio.sql.domain.Profile;
import com.portfolio.sql.repository.ProfileRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileResource {

    private final ProfileRepository repository;

    public ProfileResource(final ProfileRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/profile")
    public Profile profile() {
        return this.repository.findAll().iterator().next();
    }
}
