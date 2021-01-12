package com.portfolio.domain;

public class Career {

    private final long id;
    private final String period;

    public Career(final long id, final String period) {
        this.id = id;
        this.period = period;
    }

    public long getId() {
        return this.id;
    }

    public String getPeriod() {
        return period;
    }
}
