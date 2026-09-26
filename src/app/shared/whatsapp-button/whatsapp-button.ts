import { Component } from '@angular/core';
import { CLINIC_CONFIG } from '../config/clinic.config';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css'
})
export class WhatsappButton {

  readonly clinic = CLINIC_CONFIG;

  get whatsappLink(): string {

    const message = encodeURIComponent(
      this.clinic.whatsappMessage
    );

    return `https://wa.me/${this.clinic.whatsappNumber}?text=${message}`;
  }

}