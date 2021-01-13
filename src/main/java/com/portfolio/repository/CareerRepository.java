package com.portfolio.repository;

import com.portfolio.domain.Career;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareerRepository extends CrudRepository<Career, Integer> { }
