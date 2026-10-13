import { Component, input } from '@angular/core';
import { LearningTechnology } from '../../models/learning-content';

@Component({
  selector: 'app-technologies-section',
  standalone: true,
  templateUrl: './technologies-section.html',
  styleUrl: './technologies-section.css',
})
export class TechnologiesSection {
  readonly technologies = input.required<readonly LearningTechnology[]>();
}
