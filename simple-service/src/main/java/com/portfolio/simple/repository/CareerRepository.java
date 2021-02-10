package com.portfolio.simple.repository;

import com.portfolio.simple.domain.Career;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareerRepository extends CrudRepository<Career, Integer> { }
