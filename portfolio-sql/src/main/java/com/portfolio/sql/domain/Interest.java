package com.portfolio.sql.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Interest {

    @Id
    private long id;
    private String title;
    private String imagePath;
    private String description;

    public Interest() {}

    public Interest(@JsonProperty("id") final long id,
                    @JsonProperty("title") final String title,
                    @JsonProperty("imagePath") final String imagePath,
                    @JsonProperty("description") final String description) {
        this.id = id;
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
    }

    public long getId() {
        return this.id;
    }

    public void setId(final long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getImagePath() {
        return this.imagePath;
    }

    public void setImagePath(final String imagePath) {
        this.imagePath = imagePath;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }
}
