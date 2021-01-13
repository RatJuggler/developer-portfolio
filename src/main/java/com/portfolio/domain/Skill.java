package com.portfolio.domain;

public class Skill {

    private final long id;
    private final String level;
    private final String category;
    private final String skill;
    private final String description;

    public Skill(final long id, final String level, final String category, final String skill, final String description) {
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
