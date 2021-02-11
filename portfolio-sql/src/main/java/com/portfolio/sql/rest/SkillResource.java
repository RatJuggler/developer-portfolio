package com.portfolio.sql.rest;

import com.portfolio.sql.domain.Skill;
import com.portfolio.sql.repository.SkillRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SkillResource {

    private final SkillRepository repository;

    public SkillResource(final SkillRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/skills")
    public Iterable<Skill> skill() {
        return this.repository.findAll();
    }
}
