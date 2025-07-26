import type { Task } from './types'

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Починить баг с авторизацией',
    description: 'Логин не работает в Firefox на версии 115+',
    status: 'To Do',
    category: 'Bug',
    priority: 'High'
  },
  {
    id: '2',
    title: 'Добавить тёмную тему',
    description: 'Реализовать переключатель и тёмную палитру цветов',
    status: 'In Progress',
    category: 'Feature',
    priority: 'Medium'
  },
  {
    id: '3',
    title: 'Документировать API',
    description: 'Описать эндпоинты аутентификации и задач',
    status: 'Done',
    category: 'Documentation',
    priority: 'Low'
  },
  {
    id: '4',
    title: 'Рефакторинг модуля авторизации',
    description: 'Упростить код, выделить повторяющиеся логику в хелперы',
    status: 'To Do',
    category: 'Refactor',
    priority: 'Medium'
  },
  {
    id: '7',
    title: 'Добавить фильтры по статусу задач',
    description: 'Возможность фильтрации: To Do, In Progress, Done',
    status: 'In Progress',
    category: 'Feature',
    priority: 'Medium'
  },
  {
    id: '9',
    title: 'Обновить документацию по установке',
    description: 'Добавить раздел с требованиями к Node.js',
    status: 'Done',
    category: 'Documentation',
    priority: 'Low'
  }
]