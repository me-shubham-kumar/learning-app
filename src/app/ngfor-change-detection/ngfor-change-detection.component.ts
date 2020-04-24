import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-change-detection',
  templateUrl: './ngfor-change-detection.component.html',
  styleUrls: ['./ngfor-change-detection.component.css']
})
export class NgforChangeDetectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses:Array<{id:number,name:string}>; 

  addCourse(){
    this.courses.push({id:4,name:'Shyam'});
  }

  removeCourse(course:{id:number,name:string}){
    console.log(course)
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  loadCourse(){
    this.courses = [
      {id:1,name:'Radha'},
      {id:2,name:'Krishna'},
      {id:3,name:'Balram'}
    ]
  }

  trackCourses(index,course){
    console.log("index in trackCourses "+index);
    return course ? course.id : undefined;
  }


}
