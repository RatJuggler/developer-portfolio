package com.portfolio.sql.rest;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.portfolio.sql.domain.Profile;
import com.portfolio.sql.repository.ProfileRepository;

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

@WebMvcTest(ProfileResource.class)
public class ProfileResourceTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProfileRepository repository;

    @Test
    public void getProfileTest() throws Exception {
        List<Profile> testProfile = new ArrayList<>();
        testProfile.add(new Profile(1, "Test Name 1", "Test Location 1", "Test Status 1",
                "test/avatar1", "test/photo1", "Test Description 1", "test1@email.com",
                "https://linkedin.com/test1", "https://github.com/test1", "@test1Twitter"));
        when(repository.findAll()).thenReturn(testProfile);
        ObjectMapper mapper = new ObjectMapper();
        String expectedProfile = mapper.writeValueAsString(testProfile.get(0));
        this.mockMvc.perform(get("/profile"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string(equalTo(expectedProfile)));
    }
}
