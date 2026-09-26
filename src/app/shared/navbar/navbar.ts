import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CLINIC_CONFIG } from '../config/clinic.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  readonly clinic = CLINIC_CONFIG;

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  get whatsappLink(): string {
    const message = encodeURIComponent(
      this.clinic.whatsappMessage
    );

    return `https://wa.me/${this.clinic.whatsappNumber}?text=${message}`;
  }
}