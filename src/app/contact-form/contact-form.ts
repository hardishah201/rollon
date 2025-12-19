import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.services';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactForm{
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private UserService: UserService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get firstName(): AbstractControl | null {
    return this.contactForm.get('firstName');
  }

  get lastName(): AbstractControl | null {
    return this.contactForm.get('lastName');
  }

  get email(): AbstractControl | null {
    return this.contactForm.get('email');
  }

  get message(): AbstractControl | null {
    return this.contactForm.get('message');
  }

}
