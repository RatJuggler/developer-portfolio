package com.portfolio.simple.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.data.annotation.Id;
import org.springframework.data.keyvalue.annotation.KeySpace;

@KeySpace("profile")
public class Profile {

    @Id
    private long id;
    private String name;
    private String location;
    private String status;
    private String avatarPath;
    private String photoPath;
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

    public String getName() {
        return this.name;
    }

    public String getLocation() {
        return this.location;
    }

    public String getStatus() {
        return this.status;
    }

    public String getAvatarPath() {
        return this.avatarPath;
    }

    public String getPhotoPath() {
        return this.photoPath;
    }

    public String getDescription() {
        return this.description;
    }

    public String getEmail() {
        return this.email;
    }

    public String getLinkedin() {
        return this.linkedin;
    }

    public String getGithub() {
        return this.github;
    }

    public String getTwitter() {
        return this.twitter;
    }
}
