package com.portfolio.sql.repository;

import com.portfolio.sql.domain.Skill;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends CrudRepository<Skill, Integer> { }
