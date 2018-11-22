import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {StudentService} from '../services/student.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student : any = [];
  myName : String; 
  myCollege : String; 
  myCourse : String; 
  myYear : String; 
  constructor(private router:Router, private route: ActivatedRoute, private service:StudentService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getStudent(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.student = data;
      console.log(this.student);
      this.myName = this.student.title;
      console.log("message" +this.myName);

    });
  }
  onEditStudent(form: NgForm) {
    this.service.updateStudent(this.student._id, form.value.name, form.value.college, form.value.course, form.value.year).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}
