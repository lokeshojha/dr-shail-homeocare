import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CLINIC_CONFIG } from '../../shared/config/clinic.config';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-appointment.html',
  styleUrl: './book-appointment.css'
})
export class BookAppointment {

  submitted = false;

  readonly clinic = CLINIC_CONFIG;

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

  submitAppointment(): void {

    if (this.appointmentForm.invalid) {
      this.appointmentForm.markAllAsTouched();
      return;
    }

    const appointment = this.appointmentForm.getRawValue();

    const message = [
      '*New Appointment Request*',
      '',
      `*Name:* ${appointment.name}`,
      `*Phone:* ${appointment.phone}`,
      `*Consultation:* ${appointment.consultationType}`,
      `*Preferred Date:* ${appointment.preferredDate}`,
      `*Preferred Time:* ${appointment.preferredTime}`,
      `*Concern:* ${appointment.concern}`,
      appointment.email
        ? `*Email:* ${appointment.email}`
        : '',
      '',
      'Please confirm the appointment availability.'
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl =
      `https://wa.me/${this.clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );

    this.submitted = true;
  }
}