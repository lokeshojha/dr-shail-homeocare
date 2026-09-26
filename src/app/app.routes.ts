import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Treatments } from './pages/treatments/treatments';
import { BookAppointment } from './pages/book-appointment/book-appointment';
import { OnlineConsultation } from './pages/online-consultation/online-consultation';
import { Testimonials } from './pages/testimonials/testimonials';
import { Faqs } from './pages/faqs/faqs';
import { Contact } from './pages/contact/contact';
import { HealthLibrary } from './pages/health-library/health-library';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'treatments',
    component: Treatments
  },

  {
    path: 'book-appointment',
    component: BookAppointment
  },

  {
    path: 'online-consultation',
    component: OnlineConsultation
  },

  {
    path: 'testimonials',
    component: Testimonials
  },
  {
    path: 'faqs',
    component: Faqs
  },
  
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'health-library',
    component: HealthLibrary
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy
  },
    
  {
    path: '**',
    redirectTo: ''
  }

];