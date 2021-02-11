package com.portfolio.sql.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Career {

    @Id
    private long id;
    private int step;
    private String description;
    private String imagePath;
    private String synopsis;

    public Career() {}

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

    public void setId(final long id) {
        this.id = id;
    }

    public int getStep() {
        return this.step;
    }

    public void setStep(final int step) {
        this.step = step;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    public String getImagePath() {
        return this.imagePath;
    }

    public void setImagePath(final String imagePath) {
        this.imagePath = imagePath;
    }

    public String getSynopsis() {
        return this.synopsis;
    }

    public void setSynopsis(final String synopsis) {
        this.synopsis = synopsis;
    }
}
