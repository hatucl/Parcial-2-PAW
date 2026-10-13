import { Component, input } from '@angular/core';
import { LearningTopic } from '../../models/learning-content';

@Component({
  selector: 'app-topics-section',
  standalone: true,
  templateUrl: './topics-section.html',
  styleUrl: './topics-section.css',
})
export class TopicsSection {
  readonly topics = input.required<readonly LearningTopic[]>();
}
