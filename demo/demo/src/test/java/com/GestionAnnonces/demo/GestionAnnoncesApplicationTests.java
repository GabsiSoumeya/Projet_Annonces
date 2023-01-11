package com.GestionAnnonces.demo;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;


@SpringBootTest(properties = "spring.main.lazy-initialization=true",classes = {GestionAnnoncesApplicationTests.class})

class GestionAnnoncesApplicationTests {

	@Test
	void contextLoads() {
	}

}
