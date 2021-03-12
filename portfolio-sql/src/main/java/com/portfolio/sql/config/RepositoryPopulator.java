package com.portfolio.sql.config;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.UrlResource;
import org.springframework.core.io.Resource;
import org.springframework.data.repository.init.Jackson2RepositoryPopulatorFactoryBean;
import org.springframework.data.repository.init.Jackson2ResourceReader;
import org.springframework.data.repository.init.ResourceReader;

import java.net.MalformedURLException;

import static com.fasterxml.jackson.databind.DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES;

@Configuration
public class RepositoryPopulator {

    @Autowired
    private ApplicationArguments args;

    @Bean
    public Jackson2RepositoryPopulatorFactoryBean getRepositoryPopulator() {
        Jackson2RepositoryPopulatorFactoryBean factory = new Jackson2RepositoryPopulatorFactoryBean() {
            @Override
            protected ResourceReader getResourceReader() {
                ObjectMapper mapper = new ObjectMapper();
                mapper.configure(FAIL_ON_UNKNOWN_PROPERTIES, false);
                Jackson2ResourceReader reader = new Jackson2ResourceReader(mapper);
                reader.setTypeKey("_classSQL");
                return reader;
            }
        };
        String jsonUrl = args.getOptionValues("jsonUrl").get(0);
        try {
            factory.setResources(new Resource[] {
                    new UrlResource(jsonUrl + "/profile.json"),
                    new UrlResource(jsonUrl + "/skills.json"),
                    new UrlResource(jsonUrl + "/career.json"),
                    new UrlResource(jsonUrl + "/interests.json")
            });
        } catch (MalformedURLException e) {
            throw new IllegalArgumentException("Failed to interpret JSON resource URL: " + jsonUrl);
        }
        return factory;
    }
}
