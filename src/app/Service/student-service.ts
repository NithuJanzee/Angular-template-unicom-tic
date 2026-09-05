import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  http = inject(HttpClient)
  env = environment.baseUrl

  addStudent(data:student){
    return this.http.post<studentResponse>(this.env + 'Student',data);
  }
}
interface student{
  name:string;
  email:string;
  phone:number;
  address:string
}

interface studentResponse{
  id:number
  name:string;
  email:string;
  phone:number;
  address:string
}