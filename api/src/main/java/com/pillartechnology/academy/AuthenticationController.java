package com.pillartechnology.academy;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pillartechnology.academy.exceptions.UserAlreadyExistsException;
import com.pillartechnology.academy.exceptions.UserNotFoundException;
import com.pillartechnology.academy.logic.AuthenticationLogic;

@RestController
public class AuthenticationController {
	private AuthenticationLogic authenticationLogic;

	public AuthenticationController() {
		this.authenticationLogic = new AuthenticationLogic();
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public boolean login(@RequestBody User user) throws UserNotFoundException {
		try {
			return this.authenticationLogic.login(user.getUsername());
		} catch (UserNotFoundException ex) {
			throw ex;
		}
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public User register(@RequestBody User user) throws UserAlreadyExistsException {
		try {
			return this.authenticationLogic.register(user.getUsername());
		} catch (UserAlreadyExistsException ex) {
			throw ex;
		}
	}
}