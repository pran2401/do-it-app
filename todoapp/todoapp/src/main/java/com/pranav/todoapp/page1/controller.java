package com.pranav.todoapp.page1;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;


@Controller
@SessionAttributes("name")
public class controller {
	
	
	@RequestMapping(value="login",method=RequestMethod.GET)
	public String login() {
		return "login";
	}
	
	@RequestMapping(value="login",method=RequestMethod.POST)
	public String welcome(@RequestParam String name,@RequestParam String pass,ModelMap modal) {
		modal.put("name", name);
		modal.put("pass", pass);
		return "page1";
	}
	

}









