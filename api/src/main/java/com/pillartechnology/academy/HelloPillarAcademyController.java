package com.pillartechnology.academy;

import com.pillartechnology.academy.data.BaseRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.hibernate.HibernateException; 
import org.hibernate.Session; 
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;


@RestController
public class HelloPillarAcademyController {
	
	@RequestMapping("/")
	public String index(){
		return "Hello World";
	}
	
	@RequestMapping("/dbspike")
	public String dbSpike(){
		String message = "no message recieved";
		
		SessionFactory factory = BaseRepository.getSessionFactory();
		Session session = factory.openSession();
		Transaction tx = null;
		
		try{
			tx = session.beginTransaction();
			List<User> users = session.createQuery("FROM User").list();
			message = "" + users.size();
			tx.commit();
		} catch(HibernateException e){
			if (tx != null) tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
		
		return message;
	}
}
