package com.portfolio.sql.repository;

import com.portfolio.sql.domain.Career;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareerRepository extends CrudRepository<Career, Integer> { }
