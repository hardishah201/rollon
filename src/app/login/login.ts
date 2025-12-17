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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin-dashboard']); // Redirect if already logged in
    }
  }

  onSubmit(form: NgForm) {
    this.errorMessage = '';
    // mark fields as touched to show validation messages
    form.control.markAllAsTouched();
    if (!form.valid) {
      this.errorMessage = 'Please fix the errors above.';
      return;
    }

    // use AuthService to validate and persist authenticated state
    const ok = this.authService.login(this.username, this.password);
    if (ok) {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password.';
      this.password = '';
    }
  }
}
