import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCourseComponent } from './all-course/all-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { InstructorsComponent } from './instructors/instructors.component';

const routes: Routes = [  
  { path : 'home' ,component: HomepageComponent},
  {path : 'courses', component: CoursesComponent},
  {path : 'instructors', component: InstructorsComponent},
  {path : 'admin', component: AdminComponent},
  {path : '', component: HomepageComponent},
  {path : '', component: HomepageComponent},
  {path : '', component: HomepageComponent},
  {path : '', component: HomepageComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'Courses', component: AllCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
