package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Course;


public interface CoursesRepository extends JpaRepository<Course, Long> {
    void deleteCourseById(Long id);

    Course findCourseById(Long id);
}