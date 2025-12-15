import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UserService } from '../services/user.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit {

  submittedData : User[] = [];

  constructor(private UserService : UserService){}

  ngOnInit(): void {
    this.getData();
    console.log("hi", this.submittedData)
  }
  getData() {
    this.UserService.getSubmissiondata().subscribe((data) => (this.submittedData = data));
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }  
}
