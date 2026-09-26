import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLINIC_CONFIG } from '../../shared/config/clinic.config';


interface Treatment {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './treatments.html',
  styleUrl: './treatments.css'
})
export class Treatments {

  readonly clinic = CLINIC_CONFIG;

  readonly treatments: Treatment[] = [
    {
      name: "Women's Health",
      description:
        'Individualized consultation focused on understanding your symptoms, health history and overall wellbeing.',
      icon: '♀'
    },
    {
      name: 'Skin Disorders',
      description:
        'Personalized care that considers your skin concerns, health history and individual needs.',
      icon: '✦'
    },
    {
      name: 'Hair Fall',
      description:
        'A holistic consultation focused on understanding possible contributing factors and your overall health.',
      icon: '⌁'
    },
    {
      name: 'PCOS',
      description:
        'Individualized consultation focused on understanding your symptoms, health history and overall wellbeing.',
      icon: '◌'
    },
    {
      name: 'Thyroid Disorders',
      description:
        'Personalized consultation focused on your symptoms, health history and overall health concerns.',
      icon: '◉'
    },
    {
      name: 'Respiratory Diseases',
      description:
        'Supportive care based on your individual symptoms, health history and consultation needs.',
      icon: '☁'
    },
    {
      name: 'Arthritis',
      description:
        'Individualized care focused on understanding your symptoms, daily wellbeing and health history.',
      icon: '◈'
    },
    {
      name: 'Child Health',
      description:
        'Patient-centered consultations designed around the individual needs and health concerns of children.',
      icon: '♡'
    },
    {
      name: 'Lifestyle Disorders',
      description:
        'Holistic guidance that considers your health concerns, lifestyle, habits and overall wellbeing.',
      icon: '❋'
    }
  ];

  get whatsappLink(): string {
    const message = encodeURIComponent(
      this.clinic.whatsappMessage
    );

    return `https://wa.me/${this.clinic.whatsappNumber}?text=${message}`;
  }
}