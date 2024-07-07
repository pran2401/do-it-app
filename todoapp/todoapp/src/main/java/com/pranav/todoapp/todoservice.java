package com.pranav.todoapp;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;


import org.springframework.stereotype.Service;

@Service
public class todoservice {
	
private static List<todo> todos = new ArrayList<>();
	
	private static int todosCount = 0;
	
	static {
		todos.add(new todo(++todosCount, "pranav","Get AWS Certified", 
							LocalDate.now().plusYears(1), false ));
		todos.add(new todo(++todosCount, "pranav","Learn DevOps", 
				LocalDate.now().plusYears(2), false ));
		todos.add(new todo(++todosCount, "pranav","Learn Full Stack Development", 
				LocalDate.now().plusYears(3), false ));
	}
	
	public List<todo> getlist(String username){
		Predicate<? super todo> predicate = 
				todo -> todo.getUsername().equalsIgnoreCase(username);
		return todos.stream().filter(predicate).toList();
	}
	
	public todo addTodo(String username, String description, LocalDate targetDate, boolean done) {
		todo todo = new todo(++todosCount,username,description,targetDate,done);
		todos.add(todo);
		return todo;
	}
	
	public void deleteById(int id) {
		
		Predicate<? super todo> predicate = todo -> todo.getId() == id;
		todos.removeIf(predicate);
	}

	public todo findById(int id) {
		Predicate<? super todo> predicate = todo -> todo.getId() == id;
		todo todo = todos.stream().filter(predicate).findFirst().get();
		return todo;
	}

	public void updateTodo(todo todo) {
		deleteById(todo.getId());
		todos.add(todo);
	}
}
