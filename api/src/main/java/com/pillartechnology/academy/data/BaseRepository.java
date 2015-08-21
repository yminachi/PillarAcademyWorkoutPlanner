package com.pillartechnology.academy.data;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public abstract class BaseRepository {


	private static SessionFactory sessionFactory;
	private static ServiceRegistry serviceRegistry;
	
	public static SessionFactory getSessionFactory(){
		if (sessionFactory == null || sessionFactory.isClosed()){
			Configuration configuration = new Configuration();
		    configuration.configure();
		    serviceRegistry = new StandardServiceRegistryBuilder().applySettings(
		            configuration.getProperties()).build();
		    sessionFactory = configuration.buildSessionFactory(serviceRegistry);
		}
	    return sessionFactory;
	}
	
	public static void closeSessionFactory(){
		sessionFactory.close();
	}
}
