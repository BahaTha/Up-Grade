package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	//get all users
	@GetMapping("/all")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	@GetMapping("/all/student")
	public List<User> getAllStudents(){
		return userRepository.findAll();
	}
	@GetMapping("/all/instructor")
	public List<User> getAllInstructors(){
		return userRepository.findAll();
	}
	@PostMapping("/add")
	public void addUser(User user) {
		userRepository.save(user);
	}
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User userdata) {
		User user = userRepository.findById(userdata.getId());
		if(user.getPassword().equals(userdata.getPassword()))
			return ResponseEntity.ok(user);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User user) {
		return  ResponseEntity.ok(userRepository.save(user));
		}
	@PostMapping("/update")
	public void updateUser(User user) {
		userRepository.save(user);
	}
	@DeleteMapping("/delete")
	public void deleteUser(User user) {
		userRepository.delete(user);
	}
	@GetMapping("/role")
	public List<User> getUsersByRole(Role role){
		return userRepository.getUsersByRole(role);
	}
	
}
