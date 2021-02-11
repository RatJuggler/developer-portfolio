package com.portfolio.simple.repository;

import com.portfolio.simple.domain.Skill;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends CrudRepository<Skill, Integer> { }
