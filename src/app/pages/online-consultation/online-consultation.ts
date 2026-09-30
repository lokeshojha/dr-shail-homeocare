import {
  AfterViewInit,
  Component,
  OnDestroy
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-online-consultation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './online-consultation.html',
  styleUrl: './online-consultation.css'
})
export class OnlineConsultation
  implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
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
        threshold: 0.15
      }
    );

    const animatedElements =
      document.querySelectorAll('.animate-on-scroll');

    animatedElements.forEach((element) => {
      this.observer?.observe(element);
    });
  }
}