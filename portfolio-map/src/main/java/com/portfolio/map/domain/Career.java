package com.portfolio.map.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.data.annotation.Id;
import org.springframework.data.keyvalue.annotation.KeySpace;

@KeySpace("career")
public class Career {

    @Id
    private final long id;
    private final int step;
    private final String description;
    private final String imagePath;
    private final String synopsis;

    public Career(@JsonProperty("id") final long id,
                  @JsonProperty("step") final int step,
                  @JsonProperty("description") final String description,
                  @JsonProperty("imagePath") final String imagePath,
                  @JsonProperty("synopsis") final String synopsis) {
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
