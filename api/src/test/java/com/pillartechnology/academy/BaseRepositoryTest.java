package com.pillartechnology.academy;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.hibernate.SessionFactory;
import com.pillartechnology.academy.data.BaseRepository;

public class BaseRepositoryTest {
	
	@Test
	public void baseRepositorySessionFactoryShouldBeStatic() throws Exception {
		SessionFactory sessionFactory1 = BaseRepository.getSessionFactory();
		SessionFactory sessionFactory2 = BaseRepository.getSessionFactory();
		
		assertEquals(sessionFactory1, sessionFactory2);
	}
}
