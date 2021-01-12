package com.portfolio.domain;

public class Interest {

    private final long id;
    private final String interest;

    public Interest(final long id, final String interest) {
        this.id = id;
        this.interest = interest;
    }

    public long getId() {
        return this.id;
    }

    public String getInterest() {
        return interest;
    }
}
