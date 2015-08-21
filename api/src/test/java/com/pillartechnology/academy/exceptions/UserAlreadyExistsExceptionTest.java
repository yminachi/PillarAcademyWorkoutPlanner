package com.pillartechnology.academy.exceptions;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class UserAlreadyExistsExceptionTest {
	@Test
	public void messageIsSetCorrectly() {
		try {
			throw new UserAlreadyExistsException();
		} catch (UserAlreadyExistsException ex) {
			assertEquals("This user already exists", ex.getMessage());
		}
	}

}
