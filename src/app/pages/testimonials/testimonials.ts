import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Testimonial {
  name: string;
  location: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {

  readonly testimonials: Testimonial[] = [
    {
      name: 'Patient Feedback',
      location: 'Online Consultation',
      text: 'The consultation gave me the opportunity to discuss my concerns in detail and feel heard throughout the process.'
    },
    {
      name: 'Patient Feedback',
      location: 'Prayagraj',
      text: 'I appreciated the personalised approach and the time taken to understand my health history and concerns.'
    },
    {
      name: 'Patient Feedback',
      location: 'Online Consultation',
      text: 'The consultation experience was comfortable, thoughtful and easy to access from home.'
    },
    {
      name: 'Patient Feedback',
      location: 'Lucknow',
      text: 'The overall consultation experience was patient-focused and gave me the space to discuss my concerns openly.'
    },
    {
      name: 'Patient Feedback',
      location: 'Bahrain',
      text: 'Being able to consult online made it convenient to connect with the clinic from another location.'
    },
    {
      name: 'Patient Feedback',
      location: 'Online Consultation',
      text: 'The consultation focused on understanding my individual concerns rather than rushing through the appointment.'
    }
  ];
}