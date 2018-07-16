import { Component, OnInit } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import {AdminVar} from "../adminvar";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
dept: boolean=false;
title: boolean=false;
location:boolean=false;
rlead:boolean=false;
lm:boolean=false;
status:boolean=false;
designation:boolean=false;
skill:boolean=false;
adminTabShow=new AdminVar();
UGPN: number;
UNAME: string;
NAME: string;
GPN: number;
ENABLE: string;
showTab(name) {
  this.adminTabShow = new AdminVar();

  if (name === 'department') {
    this.adminTabShow.department = !this.adminTabShow.department;
  }
  else if (name === 'skill') {
    this.adminTabShow.skill = !this.adminTabShow.skill;
  }
}

deptform(){
  this.title=false;
  this.location=false;
  this.rlead=false;
  this.lm=false;
  this.status=false;
  this.designation=false;
  this.skill=false;
  this.dept=true;
}
titleform(){
  this.dept=false;
  this.location=false;
  this.title=true;
  this.rlead=false;
  this.lm=false;
  this.status=false;
  this.designation=false;
  this.skill=false;
}
locationform(){
  this.title=false;
  this.location=true;
  this.dept=false;
  this.rlead=false;
  this.lm=false;
  this.status=false;
  this.designation=false;
  this.skill=false;
}
rleadform(){
  this.title=false;
  this.location=false;
  this.rlead=true;
  this.lm=false;
  this.status=false;
  this.designation=false;
  this.skill=false;
  this.dept=false;
}
lmform(){
  this.title=false;
  this.location=false;
  this.rlead=false;
  this.lm=true;
  this.status=false;
  this.designation=false;
  this.skill=false;
  this.dept=false;
}
statusform(){
  this.title=false;
  this.location=false;
  this.rlead=false;
  this.lm=false;
  this.status=true;
  this.designation=false;
  this.skill=false;
  this.dept=false;
}
designationform(){
  this.title=false;
  this.location=false;
  this.rlead=false;
  this.lm=false;
  this.status=false;
  this.designation=true;
  this.skill=false;
  this.dept=false;
}
skillform(){
  this.title=false;
  this.location=false;
  this.rlead=false;
  this.lm=false;
  this.status=false;
  this.designation=false;
  this.skill=true;
  this.dept=false;
}
adddept(event,value)
{
  console.log(this.NAME);
  this.NAME="";
}
updatedept(event,value)
{
  console.log(this.UNAME+" "+this.ENABLE);
  this.ENABLE="";
  this.UNAME="";
}
addtitle(event,value)
{
  console.log(this.NAME);
  this.NAME="";
}
updatetitle(event,value)
{
  console.log(this.UNAME+" "+this.ENABLE);
  this.ENABLE="";
  this.UNAME="";
}
addlocation(event,value)
{
  console.log(this.NAME);
  this.NAME="";
}
updatelocation(event,value)
{
  console.log(this.UNAME+" "+this.ENABLE);
  this.ENABLE="";
  this.UNAME="";
}
addrlead(event,value)
{
  console.log(this.NAME+" "+this.GPN);
  this.NAME="";
  this.GPN=null;
}
updaterlead(event,value)
{
  console.log(this.UNAME+" "+this.ENABLE+" "+this.UGPN);
  this.ENABLE="";
  this.UNAME="";
  this.UGPN=null;
}
addlm(event,value)
{
  console.log(this.NAME+" "+this.GPN);
  this.NAME="";
  this.GPN=null;
}
updatelm(event,value)
{
  console.log(this.UNAME+" "+this.ENABLE+" "+this.UGPN);
  this.ENABLE="";
  this.UNAME="";
  this.UGPN=null;
}
addstatus(event,value)
{
  console.log(this.NAME);
  this.NAME="";
}
updatestatus(event,value)
{
  console.log(this.UNAME+" "+this.ENABLE);
  this.ENABLE="";
  this.UNAME="";
}
adddesignation(event,value)
{
  console.log(this.NAME);
  this.NAME="";
}
updatedesignation(event,value)
{
  console.log(this.UNAME+" "+this.ENABLE);
  this.ENABLE="";
  this.UNAME="";
}
addskill(event,value)
{
  console.log(this.NAME);
  this.NAME="";
}
updateskill(event,value)
{
  console.log(this.UNAME+" "+this.ENABLE);
  this.ENABLE="";
  this.UNAME="";
}



  constructor() { }

  ngOnInit() {
  }

}
