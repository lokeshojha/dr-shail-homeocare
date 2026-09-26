import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLINIC_CONFIG } from '../../shared/config/clinic.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  readonly clinic = CLINIC_CONFIG;

  get whatsappLink(): string {
    const message = encodeURIComponent(
      this.clinic.whatsappMessage
    );

    return `https://wa.me/${this.clinic.whatsappNumber}?text=${message}`;
  }
}