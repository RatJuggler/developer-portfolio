package com.portfolio.domain;

public class Career {

    private final long id;
    private final int step;
    private final String description;
    private final String imagePath;
    private final String synopsis;

    public Career(final long id, final int step, final String description, final String imagePath, final String synopsis) {
        this.id = id;
        this.step = step;
        this.description = description;
        this.imagePath = imagePath;
        this.synopsis = synopsis;
    }

    public long getId() {
        return this.id;
    }

    public int getStep() {
        return this.step;
    }

    public String getDescription() {
        return this.description;
    }

    public String getImagePath() {
        return this.imagePath;
    }

    public String getSynopsis() {
        return this.synopsis;
    }
}
