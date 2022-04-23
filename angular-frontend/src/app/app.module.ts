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
import { SingleCourseComponent } from './courses/single-course/single-course.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AddInstructorComponent } from './instructors/add-instructor/add-instructor.component';
import { EditInstructorComponent } from './instructors/edit-instructor/edit-instructor.component';
import { ProfileInstructorComponent } from './instructors/profile-instructor/profile-instructor.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

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
    SingleCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    InstructorsComponent,
    AddInstructorComponent,
    EditInstructorComponent,
    ProfileInstructorComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
