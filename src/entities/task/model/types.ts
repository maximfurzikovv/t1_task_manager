export type TaskCategory = 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test'
export type TaskStatus = 'To Do' | 'In Progress' | 'Done'
export type TaskPriority = 'Low' | 'Medium' | 'High'

export const TASK_CATEGORIES: TaskCategory[] = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test']
export const TASK_STATUSES: TaskStatus[] = ['To Do', 'In Progress', 'Done']
export const TASK_PRIORITIES: TaskPriority[] = ['Low', 'Medium', 'High']

export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  category: TaskCategory
  priority: TaskPriority
}
