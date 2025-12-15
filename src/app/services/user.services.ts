import { Injectable } from '@angular/core';
import { User } from '../users/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:4200/users';
  constructor(private http: HttpClient) {} 
  submitEnquiry(data: any) { return this.http.post('http://localhost:3000/submit-enquiry', data); }
  getSubmissiondata(){
    console.log(this.http.get<User[]>(this.url))
    return this.http.get<User[]>(this.url)
  }
}
