package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Course;
import com.example.demo.repository.CoursesRepository;

@RestController
@RequestMapping("/Courses")
public class CourseController {
	
	 @Autowired
		private CoursesRepository CourseRepository;
	    public void CourseResource(CoursesRepository CourseRepository) {
	        this.CourseRepository = CourseRepository;
	    }
	    @GetMapping("/all")
	    public ResponseEntity<List<Course>> getAllCourses () {
	        List<Course> Courses = CourseRepository.findAll();
	        return new ResponseEntity<>(Courses, HttpStatus.OK);
	    }
	    @GetMapping("/find/{id}")
	    public ResponseEntity<Course> getCourseById (@PathVariable("id") Long id) {
	    	Course course = CourseRepository.findCourseById(id);
	        return new ResponseEntity<>(course, HttpStatus.OK);
	    }
	    @ResponseBody
	    @PostMapping("/add")
	    public ResponseEntity<Course> addCourse(@RequestBody Course Course) {
	        Course newCourse = CourseRepository.save(Course);
	        return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
	    }

	    @PutMapping("/update")
	    public ResponseEntity<Course> updateCourse(@RequestBody Course Course) {
	        Course updateCourse = CourseRepository.save(Course);
	        return new ResponseEntity<>(updateCourse, HttpStatus.OK);
	    }

	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<Course> deleteCourse(@RequestBody Course Course) {
	        CourseRepository.delete(Course);
	        return new ResponseEntity<>(HttpStatus.OK);
	    }
	}

