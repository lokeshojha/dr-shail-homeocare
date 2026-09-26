import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLINIC_CONFIG } from '../config/clinic.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  readonly clinic = CLINIC_CONFIG;

}