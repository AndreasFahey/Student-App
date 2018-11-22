import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor(private service:StudentService) { }

  onAddStudent(form: NgForm) {

    this.service.addStudent(form.value.name, form.value.college, form.value.course, form.value.year ).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}