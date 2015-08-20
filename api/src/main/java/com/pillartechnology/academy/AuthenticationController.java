package com.pillartechnology.academy;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
    public String greetingSubmit(@ModelAttribute User user) {
        return user.getUsername();
    }
}