package com.example.demo.repository;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	//@Modifying
	@Query(value="select * from Users where Users.Role = 'instructor' ",nativeQuery=true)
	public List<User> getAllInstructors();

	@Query(value="select * from Users where Users.Role = 'student' ",nativeQuery=true)
	public List<User> getAllStudents();

	@Query(value="select * from Users where Users.Role = ?1 ",nativeQuery=true)
	public List<User> getUsersByRole(Role role);
	
	@Modifying
	@Query(value="update Users set firstname =?1 , laststname =?1 , username =?1 , firstname =?1 , firstname =?1 , ",nativeQuery=true)
	public List<User> updateUser(User user);
	
	public User findById(long id);
	
}