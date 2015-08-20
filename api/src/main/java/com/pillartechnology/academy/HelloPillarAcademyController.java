package com.pillartechnology.academy;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.hibernate.HibernateException; 
import org.hibernate.Session; 
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


@RestController
public class HelloPillarAcademyController {

	@RequestMapping("/")
	public String index(){
		SessionFactory factory = new Configuration().configure().buildSessionFactory();
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		List<User> users = session.createQuery("FROM Users").list();
		tx.commit();
		
		return "" + users.size();
	}
}
