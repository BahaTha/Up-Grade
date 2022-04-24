package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	//@Modifying
	@Query(value="select * from Users where Users.Role = instructor ",nativeQuery=true)
	public List<User> getAllInstructors();

	@Query(value="select * from Users where Users.Role = student ",nativeQuery=true)
	public List<User> getAllStudents();

	@Query(value="select * from Users where Users.Role = ?1 ",nativeQuery=true)
	public List<User> getUsersByRole(Role role);
	
	public User findById(long id);
	
}
