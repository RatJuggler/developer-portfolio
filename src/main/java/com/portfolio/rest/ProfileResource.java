package com.portfolio.rest;

import com.portfolio.domain.Profile;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileResource {

    @GetMapping("/profile")
    public Profile profile() {
        return new Profile(1, "Developer Name");
    }
}
