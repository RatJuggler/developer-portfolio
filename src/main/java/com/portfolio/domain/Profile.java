package com.portfolio.domain;

public class Profile {

    private final long id;
    private final String name;

    public Profile(final long id, final String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return this.id;
    }

    public String getName() {
        return name;
    }
}
