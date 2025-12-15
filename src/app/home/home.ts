import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactForm } from '../contact-form/contact-form';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [CommonModule, ContactForm],
})
export class Home {
  sections = [
    { title: 'What is RollOn?', content: 'RollOn is a vehicle assistance platform to help drivers find tyre shops, garages, EV stations, and breakdown help easily.' },
    { title: 'Is it available across India?', content: 'Yes, launching city-by-city across India. Starting from Ahmedabad & Gandhinagar.' },
    { title: 'Who can join as a partner?', content: 'Tyre dealers, garages, EV charging stations, and spare part shops. And other mobilty work. ' },
    { title: 'What is the Seva Foundation?', content: 'It’s RollOn’s NGO arm focused on helping PWDs with education, training, and support. ' }
  ];

  activeSection: number | null = null;

  toggleSection(index: number) {
    this.activeSection = this.activeSection === index ? null : index;
  }
}
