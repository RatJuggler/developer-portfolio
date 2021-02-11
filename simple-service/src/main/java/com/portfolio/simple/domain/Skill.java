package com.portfolio.simple.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.data.annotation.Id;
import org.springframework.data.keyvalue.annotation.KeySpace;

@KeySpace("skills")
public class Skill {

    @Id
    private final long id;
    private final String level;
    private final String category;
    private final String skill;
    private final String description;

    public Skill(@JsonProperty("id") final long id,
                 @JsonProperty("level") final String level,
                 @JsonProperty("category") final String category,
                 @JsonProperty("skill") final String skill,
                 @JsonProperty("description") final String description) {
        this.id = id;
        this.level = level;
        this.category = category;
        this.skill = skill;
        this.description = description;
    }

    public long getId() {
        return this.id;
    }

    public String getLevel() {
        return this.level;
    }

    public String getCategory() {
        return this.category;
    }

    public String getSkill() {
        return this.skill;
    }

    public String getDescription() {
        return this.description;
    }
}
