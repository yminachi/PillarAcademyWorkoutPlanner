package com.pillartechnology.academy.data;

import java.util.ArrayList;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.pillartechnology.academy.User;

public class UserRepository {

	public ArrayList<User> getListOfUsers() {

		SessionFactory factory = BaseRepository.getSessionFactory();
		Session session = factory.openSession();
		ArrayList<User> users = new ArrayList<User>();
		Transaction tx = null;

		try {
			tx = session.beginTransaction();
			Query query = session.createQuery("from User");

			users = (ArrayList<User>) query.list();

			tx.commit();
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}

		// User user = new User();
		// user.setId(1);
		// user.setUsername("tomcharles");
		//
		// users.add(user);
		return users;
	}
}
