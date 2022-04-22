import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { HomepageComponent } from './homepage/homepage.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
