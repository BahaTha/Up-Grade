package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import Services.CourseService;
import com.example.demo.model.Course;
@RestController
@RequestMapping("/Courses")
public class CoursesResource {
	
	 @Autowired
		private CourseService CourseService;
	    public void CourseResource(CourseService CourseService) {
	        this.CourseService = CourseService;
	    }
	    @GetMapping("/all")
	    public ResponseEntity<List<Course>> getAllCourses () {
	        List<Course> Courses = CourseService.findAllCourses();
	        return new ResponseEntity<>(Courses, HttpStatus.OK);
	    }
	    @GetMapping("/find/{id}")
	    public ResponseEntity<Course> getCourseById (@PathVariable("id") Long id) {
	    	Course course = CourseService.findCourseById(id);
	        return new ResponseEntity<>(course, HttpStatus.OK);
	    }
	    @ResponseBody
	    @PostMapping("/add")
	    public ResponseEntity<Course> addCourse(@RequestBody Course Course) {
	        Course newCourse = CourseService.addCourse(Course);
	        return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
	    }

	    @PutMapping("/update")
	    public ResponseEntity<Course> updateCourse(@RequestBody Course Course) {
	        Course updateCourse = CourseService.updateCourse(Course);
	        return new ResponseEntity<>(updateCourse, HttpStatus.OK);
	    }

	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<?> deleteCourse(@PathVariable("id") Long id) {
	        CourseService.deleteCourse(id);
	        return new ResponseEntity<>(HttpStatus.OK);
	    }
	}

