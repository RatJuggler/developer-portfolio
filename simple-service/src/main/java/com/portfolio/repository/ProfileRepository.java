package com.portfolio.repository;

import com.portfolio.domain.Profile;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends CrudRepository<Profile, Integer> { }
