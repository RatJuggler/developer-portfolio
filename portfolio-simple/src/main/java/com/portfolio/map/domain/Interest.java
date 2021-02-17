package com.portfolio.map.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.data.annotation.Id;
import org.springframework.data.keyvalue.annotation.KeySpace;

@KeySpace("interests")
public class Interest {

    @Id
    private final long id;
    private final String title;
    private final String imagePath;
    private final String description;

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
