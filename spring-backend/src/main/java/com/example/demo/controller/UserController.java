package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.exception.ResourceNotFoundException;
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
		return userRepository.getAllStudents();
	}
	@GetMapping("/all/instructor")
	public List<User> getAllInstructors(){
		return userRepository.getAllInstructors();
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
	
	@DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long userId)
            throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + userId));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
	
	@GetMapping("/role")
	public List<User> getUsersByRole(Role role){
		return userRepository.getUsersByRole(role);
	}
	@PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long id,
        @RequestBody User userdata) throws ResourceNotFoundException {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + id));
        user.setEmailId(userdata.getEmailId());
        user.setLastname(userdata.getLastname());
        user.setFirstname(userdata.getFirstname());
        user.setUsername(userdata.getUsername() );
        user.setPassword(userdata.getPassword());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }
}