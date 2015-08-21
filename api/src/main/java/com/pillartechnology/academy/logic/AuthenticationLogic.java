package com.pillartechnology.academy.logic;

import com.pillartechnology.academy.User;
import com.pillartechnology.academy.exceptions.UserAlreadyExistsException;
import com.pillartechnology.academy.exceptions.UserNotFoundException;

public class AuthenticationLogic {

	public boolean login(String username) throws UserNotFoundException {
		if (username.equals("tom"))
			return true;

		throw new UserNotFoundException();
	}

	public User register(String username) throws UserAlreadyExistsException {
		if (username.equals("Dicko")) {
			User user = new User();
			user.setId(1);
			user.setUsername(username);

			return user;
		}

		throw new UserAlreadyExistsException();
	}

}
