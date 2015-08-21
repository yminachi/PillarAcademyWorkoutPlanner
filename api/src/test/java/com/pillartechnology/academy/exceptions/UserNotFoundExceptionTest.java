package com.pillartechnology.academy.exceptions;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class UserNotFoundExceptionTest {

	@Test
	public void messageIsSetCorrectly() {
		try {
			throw new UserNotFoundException();
		} catch (UserNotFoundException ex) {
			assertEquals("User does not exist", ex.getMessage());
		}
	}
}
