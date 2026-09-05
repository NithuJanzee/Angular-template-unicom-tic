import { Component, inject } from '@angular/core';
import { StudentService } from '../Service/student-service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  imports: [ReactiveFormsModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  studentService = inject(StudentService);
  fb = inject(FormBuilder)

  studentForm = this.fb.nonNullable.group({
    name:'',
    email:'',
    phone:0,
    address:''
  })


  onSubmit(data:any){
    this.studentService.addStudent(data).subscribe(()=>{
      this.studentForm.reset();
    })
  }
}
