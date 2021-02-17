package com.portfolio.map.repository;

import com.portfolio.map.domain.Skill;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends CrudRepository<Skill, Integer> { }
