import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from "src/app/course";
import { Router } from 'express';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course:Course=new Course();
  constructor(private CourseService: CourseService, private router:Router) { }

  ngOnInit(): void {
    this.retrieveCourses();
  }
  editpressed=false;
  courses:any;
  courseRegister(){
    this.CourseService.create(this.course);
    
  }
  validateCourse(){

  }
  deleteCourse(cat:Course){
    this.CourseService.delete(cat.id);
  }
  modifyCourse(cat:Course) {
    this.editpressed=true;
  }
  CourseUpdate() {
    
  }
  onReset(){
    return;
  }
  retrieveCourses(): void {
    this.CourseService.getAll()
      .subscribe(
        data => {
          this.courses = data;
        },
        error => {
          console.log(error);
        });
  }
}
