package com.pillartechnology.academy;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloPillarAcademyController {

	public String index(){
		return "Hello World";
	}
}
