package com.pranav.todoapp;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class todocontroller {
	
	private todoservice todoservice;
	private todorepo repo;
	
	public todocontroller(todoservice todoservice,todorepo repo) {
		super();
		this.todoservice = todoservice;
		this.repo=repo;
	}

	
	
	@GetMapping("/users/{username}/todo")
	public List<todo> gettodo(@PathVariable String username, ModelMap model) {
		List<todo> todos= todoservice.getlist(username);
		return todos;
	}
	@GetMapping("/users/{username}/todo/{id}")
	public todo gettodo(@PathVariable String username,@PathVariable int id, ModelMap model) {
		todo todos= todoservice.findById(id);
		return todos;
	}
	@DeleteMapping("/users/{username}/todo/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username,
            @PathVariable int id) {
        todoservice.deleteById(id);
        return ResponseEntity.noContent().build();
    }
	
	@PutMapping("/users/{username}/todo/{id}")
	  public todo updateTodo(@PathVariable String username,
	          @PathVariable int id, @RequestBody todo todo) {
	      todoservice.updateTodo(todo);
	      return todo;
	  }

	  @PostMapping("/users/{username}/todo")
	  public todo createTodo(@PathVariable String username,
	           @RequestBody todo todo) {
	      todo createdTodo = todoservice.addTodo(username, todo.getDescription(),todo.getDate(),todo.isDone() );
	      
	      return createdTodo;
	  }
}
