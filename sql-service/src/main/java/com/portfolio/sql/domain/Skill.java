package com.portfolio.sql.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Skill {

    @Id
    private long id;
    private String level;
    private String category;
    private String skill;
    private String description;

    public long getId() {
        return this.id;
    }

    public void setId(final long id) {
        this.id = id;
    }

    public String getLevel() {
        return this.level;
    }

    public void setLevel(final String level) {
        this.level = level;
    }

    public String getCategory() {
        return this.category;
    }

    public void setCategory(final String category) {
        this.category = category;
    }

    public String getSkill() {
        return this.skill;
    }

    public void setSkill(final String skill) {
        this.skill = skill;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }
}
