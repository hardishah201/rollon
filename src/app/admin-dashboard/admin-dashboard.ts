import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UserService } from '../services/user.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboard {
 submittedData: User[] = [];
}
