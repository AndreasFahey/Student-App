import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../student.model';
import { stringify } from '@angular/compiler/src/util';
//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
    getStudentsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/students");
    }

  addStudent(name: string, college: string, course: string, year: string): Observable<any> {
    const student: Student = {name: name, college: college, course: course, year: year};
    return this.http.post("http://localhost:8081/api/students",student);
  }

  deleteStudent(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/students/"+id);
  }

  getStudent(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/students/"+id);
  }

  updateStudent(id:String, name: string, college: string, course: string, year: string): Observable<any> {
    const student: Student = {name: name, college: college, course: course, year: year};
  return this.http.put("http://localhost:8081/api/students/"+id, student);
  }
}