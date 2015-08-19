package com.pillartechnology.academy;

import static org.junit.Assert.*;

import org.junit.Test;


public class HelloPillarAcademyControllerTest {
	@Test
	public void testingIndexEndpoint() throws Exception {
		HelloPillarAcademyController hello = new HelloPillarAcademyController();
		String result = hello.index();
		
		assertEquals("Hello World", result);
	}
}
