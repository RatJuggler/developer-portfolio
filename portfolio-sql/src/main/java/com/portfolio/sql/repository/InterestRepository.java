package com.portfolio.sql.repository;

import com.portfolio.sql.domain.Interest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestRepository extends CrudRepository<Interest, Integer> { }
