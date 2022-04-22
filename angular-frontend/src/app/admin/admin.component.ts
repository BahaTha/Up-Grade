import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit {
  
  @ViewChild(SidebarAdminComponent, {static: false}) 
  sidebar= SidebarAdminComponent;
  public msgFromChild1 = '';
  constructor() { }
  ngAfterViewInit() {
    this.msgFromChild1 = this.sidebar.
  }

}
