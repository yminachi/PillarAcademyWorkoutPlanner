package com.pillartechnology.academy.data;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import com.pillartechnology.academy.*;

public class UserRepository {
	
	public ArrayList<User> getListOfUsers(){

		SessionFactory factory = BaseRepository.getSessionFactory();
		Session session = factory.openSession();
		ArrayList<User> users = new ArrayList<User>();
		Transaction tx = null;
		
		try{
			tx = session.beginTransaction();
			users = (ArrayList<User>) session.createQuery("FROM User").list();
			tx.commit();
		} catch(HibernateException e){
			if (tx != null) tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
		
		return users;
	}
}
