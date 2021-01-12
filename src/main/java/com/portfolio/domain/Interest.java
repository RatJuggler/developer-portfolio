package com.portfolio.domain;

public class Interest {

    private final long id;
    private final String title;
    private final String imagePath;
    private final String description;

    public Interest(final long id, final String title, final String imagePath, final String description) {
        this.id = id;
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
    }

    public long getId() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getImagePath() {
        return this.imagePath;
    }

    public String getDescription() {
        return this.description;
    }
}
