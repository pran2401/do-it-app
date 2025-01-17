package com.pranav.todoapp;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

public class todoh2repo {

    
    private todorepo todoRepository;
    
    public todoh2repo(todorepo todoRepository) {
        
        this.todoRepository = todoRepository;
    }
    
    @GetMapping("/users/{username}/todos")
    public List<todo> retrieveTodos(@PathVariable String username) {
        //return todoService.findByUsername(username);
        return todoRepository.findByUsername(username);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public todo retrieveTodo(@PathVariable String username,
            @PathVariable int id) {
        //return todoService.findById(id);
        return todoRepository.findById(id).get();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username,
            @PathVariable int id) {
        //todoService.deleteById(id);
        todoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public todo updateTodo(@PathVariable String username,
            @PathVariable int id, @RequestBody todo todo) {
        //todoService.updateTodo(todo);
        todoRepository.save(todo);
        return todo;
    }

    @PostMapping("/users/{username}/todos")
    public todo createTodo(@PathVariable String username,
             @RequestBody todo todo) {
        todo.setUsername(username);
        todo.setId(null);
        return todoRepository.save(todo);
//      Todo createdTodo = todoService.addTodo(username, todo.getDescription(), 
//              todo.getTargetDate(),todo.isDone() );
        
//      return createdTodo;
    }
}
