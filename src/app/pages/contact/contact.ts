import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLINIC_CONFIG } from '../../shared/config/clinic.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  readonly clinic = CLINIC_CONFIG;

  get whatsappLink(): string {
    const message = encodeURIComponent(
      this.clinic.whatsappMessage
    );

    return `https://wa.me/${this.clinic.whatsappNumber}?text=${message}`;
  }
}