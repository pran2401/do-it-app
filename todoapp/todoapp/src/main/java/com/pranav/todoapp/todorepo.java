package com.pranav.todoapp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



public interface todorepo extends JpaRepository<todo, Integer> {
	
	List<todo> findByUsername(String username);
}
