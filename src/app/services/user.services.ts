import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:4000/users';
  constructor(private http: HttpClient) {}

  submitEnquiry(data: any) {
    // Post to backend; if it fails, return a safe observable with error info (no local save)
    return this.http.post('http://localhost:4000/submit-enquiry', data).pipe(
      catchError((err) => of({ ok: false, error: err }))
    );
  }
  
}
