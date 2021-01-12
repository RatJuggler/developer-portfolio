package com.portfolio.domain;

public class Skill {

    private final long id;
    private final String skill;

    public Skill(final long id, final String skill) {
        this.id = id;
        this.skill = skill;
    }

    public long getId() {
        return this.id;
    }

    public String getSkill() {
        return skill;
    }
}
