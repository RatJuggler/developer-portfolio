package com.portfolio.simple.rest;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.portfolio.simple.domain.Career;
import com.portfolio.simple.repository.CareerRepository;

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

@WebMvcTest(CareerResource.class)
public class CareerResourceTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CareerRepository repository;

    @Test
    public void getCareerTest() throws Exception {
        List<Career> testCareer = new ArrayList<>();
        testCareer.add(new Career(1, 1, "Test Description 1", "test/image1", "Test Synopsis 1"));
        when(repository.findAll()).thenReturn(testCareer);
        ObjectMapper mapper = new ObjectMapper();
        String expectedCareer = mapper.writeValueAsString(testCareer);
        this.mockMvc.perform(get("/career"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo(expectedCareer)));
    }
}
