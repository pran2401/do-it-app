package com.pranav.todoapp;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class todo {
	private Integer id;
	private String username;
	private String description;
	private LocalDate date;
	private boolean done;
	
	
	public todo(Integer id, String username, String description, LocalDate date, boolean done) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.date = date;
		this.done = done;
	}

	@Id
	@GeneratedValue
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public boolean isDone() {
		return done;
	}


	public void setDone(boolean done) {
		this.done = done;
	}


	@Override
	public String toString() {
		return "todo [id=" + id + ", username=" + username + ", description=" + description + ", date=" + date
				+ ", done=" + done + "]";
	}


	
	
	
	

}
