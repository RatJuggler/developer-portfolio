package com.portfolio.sql.rest;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.portfolio.sql.domain.Interest;
import com.portfolio.sql.repository.InterestRepository;

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

@WebMvcTest(InterestResource.class)
public class InterestResourceTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private InterestRepository repository;

    @Test
    public void getInterestsTest() throws Exception {
        List<Interest> testInterests = new ArrayList<>();
        testInterests.add(new Interest(1, "Test Title 1", "test/image1", "Test Description 1"));
        when(repository.findAll()).thenReturn(testInterests);
        ObjectMapper mapper = new ObjectMapper();
        String expectedInterests = mapper.writeValueAsString(testInterests);
        this.mockMvc.perform(get("/interests"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo(expectedInterests)));
    }
}
