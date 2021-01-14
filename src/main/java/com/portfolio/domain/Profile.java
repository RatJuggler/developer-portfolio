package com.portfolio.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.keyvalue.annotation.KeySpace;

import java.util.ArrayList;
import java.util.List;

@KeySpace("profile")
public class Profile {

    private static class Project {

        private String name;
        private String url;

        public Project() {}

        public Project(final String name, final String url) {
            this.name = name;
            this.url = url;
        }

        public String getName() {
            return this.name;
        }

        public String getUrl() {
            return this.url;
        }
    }

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
    private final List<Project> projects = new ArrayList<>();

    public Profile() {}

    public Profile(final long id, final String name, final String location, final String status, final String avatarPath,
                   final String photoPath, final String description, final String email, final String linkedin,
                   final String github, final String twitter) {
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
