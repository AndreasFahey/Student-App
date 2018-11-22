import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';
import { Observable } from 'rxjs';
import {Student} from '../student.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  
  posts: any = [];
    students: any;

  constructor(private ps:StudentService){}

  ngOnInit(){
   
    this.ps.getStudentsData().subscribe(data => {
        this.students = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deleteStudent(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}