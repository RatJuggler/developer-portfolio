package com.portfolio.map.repository;

import com.portfolio.map.domain.Interest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestRepository extends CrudRepository<Interest, Integer> { }
