import type { Task } from './models/task'
/**
 * Временное in-memory хранилище задач.
 */
export let tasks: Task[] = [
  {
    id: '1',
    title: 'Починить баг с авторизацией',
    description: 'Логин не работает в Firefox на версии 115+',
    status: 'To Do',
    category: 'Bug',
    priority: 'High',
    createdAt: '2025-07-14T09:25:00.000Z'
  },
  {
    id: '2',
    title: 'Добавить тёмную тему',
    description: 'Реализовать переключатель и тёмную палитру цветов',
    status: 'In Progress',
    category: 'Feature',
    priority: 'Medium',
    createdAt: '2025-07-01T13:40:00.000Z'
  },
  {
    id: '3',
    title: 'Документировать API',
    description: 'Описать эндпоинты аутентификации и задач',
    status: 'Done',
    category: 'Documentation',
    priority: 'Low',
    createdAt: '2025-07-10T17:15:00.000Z'
  },
  {
    id: '4',
    title: 'Рефакторинг модуля авторизации',
    description: 'Упростить код, выделить повторяющиеся логику в хелперы',
    status: 'To Do',
    category: 'Refactor',
    priority: 'Medium',
    createdAt: '2025-07-27T11:05:00.000Z'
  },
  {
    id: '7',
    title: 'Добавить фильтры по статусу задач',
    description: 'Возможность фильтрации: To Do, In Progress, Done',
    status: 'In Progress',
    category: 'Feature',
    priority: 'Medium',
    createdAt: '2025-07-04T08:50:00.000Z'
  },
  {
    id: '9',
    title: 'Обновить документацию по установке',
    description: 'Добавить раздел с требованиями к Node.js',
    status: 'Done',
    category: 'Documentation',
    priority: 'Low',
    createdAt: '2025-07-19T16:20:00.000Z'
  }
]

/**
 * Обновляет in-memory массив задач.
 * @param newTasks Новый массив задач, который должен заменить текущий
 */
export const setTasks = (newTasks: Task[]) => {
  tasks = newTasks
}
