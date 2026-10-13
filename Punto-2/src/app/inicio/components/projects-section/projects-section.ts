import { Component, input } from '@angular/core';
import { LearningProject } from '../../models/learning-content';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSection {
  readonly projects = input.required<readonly LearningProject[]>();
}
