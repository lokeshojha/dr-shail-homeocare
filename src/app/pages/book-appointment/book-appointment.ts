import {
  AfterViewInit,
  Component,
  OnDestroy
} from '@angular/core';
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
export class BookAppointment implements AfterViewInit, OnDestroy {

  submitted = false;

  readonly clinic = CLINIC_CONFIG;

  readonly minDate = new Date()
    .toISOString()
    .split('T')[0];

  private observer?: IntersectionObserver;

  readonly countries = [
    { name: 'India', code: '+91' },
    { name: 'Bahrain', code: '+973' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Qatar', code: '+974' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Oman', code: '+968' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'United States', code: '+1' },
    { name: 'Canada', code: '+1' },
    { name: 'Australia', code: '+61' },
    { name: 'Singapore', code: '+65' }
  ];

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

      countryCode: [
        '+91',
        Validators.required
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9\s()-]{7,15}$/)
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

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  submitAppointment(): void {

    if (this.appointmentForm.invalid) {
      this.appointmentForm.markAllAsTouched();
      return;
    }

    const appointment = this.appointmentForm.getRawValue();

    // Remove spaces, brackets and other formatting
    // before adding the country code.
    const phoneNumber = appointment.phone.replace(/\D/g, '');

    const fullPhoneNumber =
      `${appointment.countryCode}${phoneNumber}`;

    const message = [
      '*New Appointment Request*',
      '',
      `*Name:* ${appointment.name}`,
      `*Phone:* ${fullPhoneNumber}`,
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

  private setupScrollAnimations(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12
      }
    );

    const animatedElements =
      document.querySelectorAll('.animate-on-scroll');

    animatedElements.forEach((element) => {
      this.observer?.observe(element);
    });
  }
}