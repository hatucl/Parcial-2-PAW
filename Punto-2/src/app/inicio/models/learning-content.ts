export interface LearningTopic {
  id: string;
  icon: string;
  color: string;
  title: string;
  description: string;
  concepts: readonly string[];
}

export interface LearningTechnology {
  name: string;
  mark: string;
  category: string;
  color: string;
}

export interface LearningProject {
  id: string;
  type: string;
  title: string;
  description: string;
  tags: readonly string[];
}
