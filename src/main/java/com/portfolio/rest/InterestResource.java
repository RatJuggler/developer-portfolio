package com.portfolio.rest;

import com.portfolio.domain.Interest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InterestResource {

    @GetMapping("/interest")
    public Interest interest() {
        return new Interest(1, "Interest");
    }
}
