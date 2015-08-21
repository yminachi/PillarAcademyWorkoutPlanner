package com.pillartechnology.academy;

import java.util.ArrayList;

import org.junit.AfterClass;
import org.junit.Test;

import com.pillartechnology.academy.data.BaseRepository;
import com.pillartechnology.academy.data.UserRepository;

import antlr.collections.List;



public class UserRepositoryTest {
		
	@Test
	public void canGetListOfUsers(){
		UserRepository repo = new UserRepository();
		ArrayList<User> userlist = repo.getListOfUsers();
		assert(userlist.size() > 0);
	}
	
	@AfterClass
	public static void afterclass(){
		BaseRepository.closeSessionFactory();
	}
}
