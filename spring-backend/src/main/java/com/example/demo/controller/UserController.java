package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/api/v1")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	//get all users
	@GetMapping("/Users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	@PostMapping("/Users/add")
	public void addUser(User user) {
		userRepository.save(user);
	}
	@PostMapping("/Users/update")
	public void updateUser(User user) {
		userRepository.save(user);
	}
	@DeleteMapping("/Users/delete")
	public void deleteUser(User user) {
		userRepository.delete(user);
	}
	@GetMapping("/Users/role")
	public List<User> getUsersByRole(Role role){
		return userRepository.getUsersByRole(role);
	}
	
}
