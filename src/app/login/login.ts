import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin-dashboard']); // ✅ Redirect if already logged in
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) { console.log('username:', this.username, 'password:', this.password); const success = this.authService.login(this.username, this.password); console.log('Login success:', success); if (success) { this.router.navigate(['/admin-dashboard']); } else { this.errorMessage = 'Invalid credentials'; } }
  }
}
