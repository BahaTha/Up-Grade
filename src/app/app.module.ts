  
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterCustomerComponent } from './registration/register-customer/register-customer.component';
import { RegisterDeliveryGuyComponent } from './registration/register-delivery-guy/register-delivery-guy.component';
import { RegisterStoreComponent } from './registration/register-store/register-store.component';
import { AddressesFormComponent } from './registration/register-store/addresses-form/addresses-form.component';
import { Login1Component } from './login1/login1.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { SettingsComponent } from './user-profile/settings/settings.component';
import { TimelineComponent } from './user-profile/timeline/timeline.component';
import { TasksComponent } from './user-profile/tasks/tasks.component';
import { ExtraRegisterComponent } from './extra-register/extra-register.component';

const appRoutes : Routes = [
  { path : 'home' , component: HomeComponent},
  { path : 'home/user-profile' , component: UserProfileComponent},
  {path : 'admin', component: AdminComponent},
  {path : 'admin-dark', component: AdminComponent},
  {path : '', component: HomeComponent},
  {path : 'header',component: HeaderComponent},
  {path : 'register/customer',component: RegisterCustomerComponent},
  {path : 'register',component: RegistrationComponent},
  {path : 'register/delivery-guy',component: RegisterDeliveryGuyComponent},
  {path : 'register/store',component: RegisterStoreComponent},
  {path : 'login',component: Login1Component},
  {path : 'register2', component: ExtraRegisterComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    RegisterCustomerComponent,
    RegisterDeliveryGuyComponent,
    RegisterStoreComponent,
    AddressesFormComponent,
    Login1Component,
    UserProfileComponent,
    ProfileComponent,
    SettingsComponent,
    TimelineComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }