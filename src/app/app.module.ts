import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {StudentService} from './services/student.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CollegeComponent } from './college/college.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: StudentDetailsComponent
  },
  {
    path: 'create',
    component: StudentCreateComponent
  },
  {
    path: 'edit/:id',
    component: StudentEditComponent
  },
  {
    path: 'colleges',
    component: CollegeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentCreateComponent,
    StudentEditComponent,
    CollegeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }