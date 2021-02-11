package com.portfolio.sql.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.data.repository.init.Jackson2RepositoryPopulatorFactoryBean;
import org.springframework.data.repository.init.Jackson2ResourceReader;
import org.springframework.data.repository.init.ResourceReader;

import static com.fasterxml.jackson.databind.DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES;

@Configuration
public class RepositoryPopulator {

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
        factory.setResources(new Resource[] {
                new ClassPathResource("data/profile.json"),
//                new ClassPathResource("data/skills.json"),
                new ClassPathResource("data/career.json"),
                new ClassPathResource("data/interests.json")
        });
        return factory;
    }
}
