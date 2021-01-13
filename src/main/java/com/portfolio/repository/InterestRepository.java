package com.portfolio.repository;

import com.portfolio.domain.Interest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestRepository extends CrudRepository<Interest, Integer> { }
