package com.pillartechnology.academy;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.AfterClass;
import org.junit.Test;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.pillartechnology.academy.data.BaseRepository;

public class BaseRepositoryTest {
	
	@Test
	public void baseRepositorySessionFactoryShouldBeStatic() throws Exception {
		SessionFactory sessionFactory1 = BaseRepository.getSessionFactory();
		SessionFactory sessionFactory2 = BaseRepository.getSessionFactory();
		assertEquals(sessionFactory1, sessionFactory2);
	}
	
	@Test
	public void baseRepositoryCanConnect(){
		SessionFactory factory;
		Session session = null;
		try{
			factory = BaseRepository.getSessionFactory();
			session = factory.openSession();
			assert(true);
		} catch(Exception e) {
			assert(false);
		} finally {
			if (session != null && session.isOpen()) session.close();
		}
	}
	
	@AfterClass
	public static void afterClass(){
		BaseRepository.closeSessionFactory();
	}
	
}
