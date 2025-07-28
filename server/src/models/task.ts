export interface Task {
  id: string;
  title: string;
  description?: string;
  category: 'Bug' | 'Feature' | 'Improvement' | 'Documentation' | 'Refactor';
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High';
  createdAt: string;
}
