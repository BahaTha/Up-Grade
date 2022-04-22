import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public currentMsgToParent='';
  public msgFromChild1='';

  msgToParent() { 
    this.msgFromChild1 = this.currentMsgToParent;
  }
  public msgFromChild(){
    return this.msgFromChild1;
  }
  renderDashboard(){
    this.currentMsgToParent = 'Dashboard';
  }
  renderAllCourses(){
    this.currentMsgToParent = 'AllCourses';
  }
  renderManageCourses(){
    this.currentMsgToParent = 'ManageCourses';
  }
  renderAllStudents(){
    this.currentMsgToParent = 'AllStudents';
  }
  renderManageStudents(){
    this.currentMsgToParent = 'ManageStudents';
  }
  renderAllInstructors(){
    this.currentMsgToParent = 'AllInstructors';
  }
  renderManageInstructorss(){
    this.currentMsgToParent = 'ManageInstructorss';
  }

  title = 'childmenu';
  public menus = new Array();
  public submenu = new Array();

  navmenuclick(value:any){
    let i:number;
    for(i= 0; i<5; i++){
      if(i != value){
          this.menus[i] = false;  
          /*Submenu Code Start*/
          this.submenu[ i] = false;
          this.submenu[i+1] = false;
          /*Submenu Code Close*/
      }
    }
    if(this.menus[value] == true){
      this.menus[value] = false;  
    }else{
      this.menus[value] = true;  
    }
 }
 showDashboard(value:any){

 }
}