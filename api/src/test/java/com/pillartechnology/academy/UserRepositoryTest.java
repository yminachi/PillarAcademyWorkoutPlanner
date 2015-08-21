package com.pillartechnology.academy;

import java.util.List;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import com.pillartechnology.academy.data.BaseRepository;
import com.pillartechnology.academy.data.UserRepository;

public class UserRepositoryTest {
	private static final String EXISTING_USERNAME = "tomcharles";
	private static final String NON_EXISTANT_USERNAME = "fdsfdsfd";

	private UserRepository repo;

	@Before
	public void BeforeEach() {
		this.repo = new UserRepository();
	}

	@Test
	public void canGetListOfUsers() {
		List<User> userlist = repo.getListOfUsers();
		assert(userlist.size() > 0);
	}

	@AfterClass
	public static void afterclass() {
		BaseRepository.closeSessionFactory();
	}
}
