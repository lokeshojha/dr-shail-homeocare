import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HealthTopic {
  title: string;
  category: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-health-library',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './health-library.html',
  styleUrl: './health-library.css'
})
export class HealthLibrary {

  readonly topics: HealthTopic[] = [
    {
      title: 'Understanding PCOS',
      category: "Women's Health",
      description:
        'Learn about common concerns associated with PCOS and the importance of an individualized healthcare consultation.',
      icon: '◌'
    },
    {
      title: 'Skin Health',
      category: 'Skin Disorders',
      description:
        'Explore general information about common skin concerns and factors that can influence overall skin health.',
      icon: '✦'
    },
    {
      title: 'Hair Fall & Hair Health',
      category: 'Hair Health',
      description:
        'Understand some of the factors that may be associated with hair fall and why individual assessment matters.',
      icon: '⌁'
    },
    {
      title: 'Thyroid Health',
      category: 'General Wellness',
      description:
        'Learn about thyroid-related health concerns and the role of appropriate medical evaluation.',
      icon: '◉'
    },
    {
      title: 'Respiratory Health',
      category: 'Respiratory Care',
      description:
        'General information about respiratory health, common concerns and when professional medical advice may be needed.',
      icon: '☁'
    },
    {
      title: 'Healthy Lifestyle',
      category: 'Wellness',
      description:
        'Explore everyday factors such as sleep, nutrition, activity and stress that contribute to overall wellbeing.',
      icon: '❋'
    }
  ];
}