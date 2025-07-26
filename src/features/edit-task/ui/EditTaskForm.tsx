import { Button, MenuItem, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import styles from '@pages/task-details/TaskDetailsPage.module.css'
import {
  TASK_CATEGORIES,
  TASK_STATUSES,
  TASK_PRIORITIES
} from '@entities/task/model/types'
import type { Task } from '@entities/task/model/types'

interface Props {
    initialTask: Task
    onSave: (task: Task) => void
    onCancel: () => void
}

export function EditTaskForm({ initialTask, onSave, onCancel }: Props) {
    const [task, setTask] = useState<Task>(initialTask)

    const handleChange = (field: keyof Task) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({
            ...task,
            [field]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSave(task)
    }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          label="Название задачи"
          value={task.title}
          onChange={handleChange('title')}
          fullWidth
          className={styles.textField}
        />

        <TextField
          label="Описание задачи"
          value={task.description ?? ''}
          onChange={handleChange('description')}
          multiline
          rows={2}
          fullWidth
          className={styles.textField}
        />

        <TextField
          label="Категория задачи"
          value={task.category}
          onChange={handleChange('category')}
          select
          fullWidth
          className={styles.textField}
        >
          {TASK_CATEGORIES.map((option: Task['category']) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>

        <TextField
          label="Статус задачи"
          value={task.status}
          onChange={handleChange('status')}
          select
          fullWidth
          className={styles.textField}
        >
          {TASK_STATUSES.map((option: Task['status']) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>

        <TextField
          label="Приоритет задачи"
          value={task.priority}
          onChange={handleChange('priority')}
          select
          fullWidth
          className={styles.textField}
        >
          {TASK_PRIORITIES.map((option: Task['priority']) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>

        <div className={styles.buttonGroup}>
          <Button
            type="submit"
            variant="contained"
            className={styles.saveButton}
          >
            Сохранить
          </Button>
          <Button
            variant="outlined"
            onClick={onCancel}
            className={styles.cancelButton}
          >
            Назад
          </Button>
        </div>
      </Stack>
    </form>
  )
}