package com.portfolio.rest;

import com.portfolio.domain.Career;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CareerResource {

    @GetMapping("/career")
    public Career skill() {
        return new Career(1, 1, "Description", "ImagePath", "Synopsis");
    }
}
