import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.services';


@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  contactForm: FormGroup;
  submittedData: any[] = [];

  constructor(private fb: FormBuilder, private UserService: UserService) { this.contactForm = this.fb.group({ firstName: ['', Validators.required], lastName: ['', Validators.required], email: ['', [Validators.required, Validators.email]], message: ['', Validators.required] }); }

  onSubmit() {
    if (this.contactForm.valid) {
      this.UserService.submitEnquiry(this.contactForm.value).subscribe({
        next: (res) => { console.log(res); this.submittedData.push(this.contactForm.value); },
        error: (err) => console.error('Error saving enquiry:', err)
      });
    }
  }
  get firstName() { return this.contactForm.get('firstName'); }
  get lastName() { return this.contactForm.get('lastName'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
