import {
  AfterViewInit,
  Component,
  OnDestroy
} from '@angular/core';
import { RouterLink } from '@angular/router';

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css'
})
export class Faqs implements AfterViewInit, OnDestroy {

  openFaq: number | null = null;

  private observer?: IntersectionObserver;

  readonly faqs: Faq[] = [
    {
      question: 'What happens during a consultation?',
      answer:
        'The consultation begins with a discussion about your current concerns, symptoms, health history and relevant lifestyle factors. This helps the doctor understand your individual needs and discuss an appropriate care approach.'
    },
    {
      question: 'Do you offer online consultations?',
      answer:
        'Yes. Online consultations are available for patients who prefer to connect remotely. You can submit an appointment request through the Book Appointment page, and the clinic will confirm the consultation details.'
    },
    {
      question: 'Can I request an in-person consultation?',
      answer:
        'Yes. In-person consultation requests can be submitted through the appointment form. Availability and location details will be confirmed by the clinic.'
    },
    {
      question: 'How long does a consultation take?',
      answer:
        'Consultation duration can vary depending on the individual, their concerns and the information that needs to be discussed.'
    },
    {
      question: 'What information should I share during my consultation?',
      answer:
        'You can share your current symptoms, relevant health history, previous diagnoses, ongoing treatments and any other information that may help the doctor understand your concerns.'
    },
    {
      question: 'Can homeopathy replace emergency medical care?',
      answer:
        'No. Emergency or urgent medical symptoms should be evaluated by appropriate emergency medical services or a qualified healthcare professional without delay.'
    },
    {
      question: 'How do I request an appointment?',
      answer:
        'You can use the Book Appointment page to submit your preferred consultation type, date, time and health concern. Your request is not considered confirmed until the clinic confirms the appointment.'
    },
    {
      question: 'Can I ask questions before booking a consultation?',
      answer:
        'Yes. You can use the available contact or WhatsApp option to enquire about the consultation process before submitting an appointment request.'
    }
  ];

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
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