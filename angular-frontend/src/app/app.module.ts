import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    AllCoursesComponent,
    AllCourseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
