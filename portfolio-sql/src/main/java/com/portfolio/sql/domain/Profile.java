package com.portfolio.sql.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Profile {

    @Id
    private long id;
    private String name;
    private String location;
    private String status;
    private String avatarPath;
    private String photoPath;
    @Lob
    private String description;
    private String email;
    private String linkedin;
    private String github;
    private String twitter;

    public Profile() {}

    public Profile(@JsonProperty("id") final long id,
                   @JsonProperty("name") final String name,
                   @JsonProperty("location") final String location,
                   @JsonProperty("status") final String status,
                   @JsonProperty("avatarPath") final String avatarPath,
                   @JsonProperty("photoPath") final String photoPath,
                   @JsonProperty("description") final String description,
                   @JsonProperty("email") final String email,
                   @JsonProperty("linkedin") final String linkedin,
                   @JsonProperty("github") final String github,
                   @JsonProperty("twitter") final String twitter) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.location = location;
        this.avatarPath = avatarPath;
        this.photoPath = photoPath;
        this.description = description;
        this.email = email;
        this.linkedin = linkedin;
        this.github = github;
        this.twitter = twitter;
    }

    public long getId() {
        return this.id;
    }

    public void setId(final long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(final String location) {
        this.location = location;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(final String status) {
        this.status = status;
    }

    public String getAvatarPath() {
        return this.avatarPath;
    }

    public void setAvatarPath(final String avatarPath) {
        this.avatarPath = avatarPath;
    }

    public String getPhotoPath() {
        return this.photoPath;
    }

    public void setPhotoPath(final String photoPath) {
        this.photoPath = photoPath;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public String getLinkedin() {
        return this.linkedin;
    }

    public void setLinkedin(final String linkedin) {
        this.linkedin = linkedin;
    }

    public String getGithub() {
        return this.github;
    }

    public void setGithub(final String github) {
        this.github = github;
    }

    public String getTwitter() {
        return this.twitter;
    }

    public void setTwitter(final String twitter) {
        this.twitter = twitter;
    }
}
