package com.portfolio.rest;

import com.portfolio.domain.Skill;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SkillResource {

    @GetMapping("/skill")
    public Skill skill() {
        return new Skill(1, "Skill");
    }
}
