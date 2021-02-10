package com.portfolio.simple.rest;

import com.portfolio.simple.domain.Skill;
import com.portfolio.simple.repository.SkillRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SkillResource {

    private final SkillRepository repository;

    public SkillResource(final SkillRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/skills")
    public List<Skill> skill() {
        List<Skill> skills = new ArrayList<>();
        this.repository.findAll().forEach(skills::add);
        return skills;
    }
}