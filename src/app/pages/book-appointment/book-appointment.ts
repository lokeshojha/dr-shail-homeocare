import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-appointment.html',
  styleUrl: './book-appointment.css'
})
export class BookAppointment {

  submitted = false;

  readonly minDate = new Date()
    .toISOString()
    .split('T')[0];

  readonly appointmentForm;
  constructor(
    private readonly fb: FormBuilder
  ) {

    this.appointmentForm = this.fb.nonNullable.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9+\-\s()]{7,20}$/)
        ]
      ],

      email: [
        '',
        Validators.email
      ],

      consultationType: [
        'Online Consultation',
        Validators.required
      ],

      preferredDate: [
        '',
        Validators.required
      ],

      preferredTime: [
        '',
        Validators.required
      ],

      concern: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],

      consent: [
        false,
        Validators.requiredTrue
      ]

    });
  }
}