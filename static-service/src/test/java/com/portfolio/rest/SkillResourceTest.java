package com.portfolio.rest;

import com.portfolio.domain.Skill;
import com.portfolio.repository.SkillRepository;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(SkillResource.class)
public class SkillResourceTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SkillRepository repository;

    @Test
    public void getSkillsTest() throws Exception {
        List<Skill> testSkills = new ArrayList<>();
        testSkills.add(new Skill(1, "Test Level 1", "Test Category 1", "Test Skill 1", "Test Description 1"));
        when(repository.findAll()).thenReturn(testSkills);
        ObjectMapper mapper = new ObjectMapper();
        String expectedSkills = mapper.writeValueAsString(testSkills);
        this.mockMvc.perform(get("/skills"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo(expectedSkills)));
    }
}