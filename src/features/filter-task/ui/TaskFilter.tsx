import { useContext } from 'react'
import { TaskFilterContext } from '../model/context'
import {
  TASK_CATEGORIES,
  TASK_PRIORITIES,
  TASK_STATUSES
} from '@entities/task/model/types'
import { MenuItem, TextField, Stack } from '@mui/material'
import { AppButton } from "@shared/ui/Button/Button";

export function TaskFilter() {
    const context = useContext(TaskFilterContext)
    if (!context) return null

    const { filter, setFilter } = context

    const handleChange = (field: keyof typeof filter) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFilter({
            ...filter,
            [field]: e.target.value
        })
    }

    const handleReset = () => {
        setFilter({
            status: 'all',
            category: 'all',
            priority: 'all'
        })
    }

    return (
        <Stack direction="row" spacing={2} sx={{ mb: 3 }} flexWrap="wrap">
      <TextField
        label="Статус"
        value={filter.status}
        onChange={handleChange('status')}
        select
        size="small"
      >
        <MenuItem value="all">Все</MenuItem>
        {TASK_STATUSES.map(s => (
          <MenuItem key={s} value={s}>{s}</MenuItem>
        ))}
      </TextField>

      <TextField
        label="Категория"
        value={filter.category}
        onChange={handleChange('category')}
        select
        size="small"
      >
        <MenuItem value="all">Все</MenuItem>
        {TASK_CATEGORIES.map(c => (
          <MenuItem key={c} value={c}>{c}</MenuItem>
        ))}
      </TextField>

      <TextField
        label="Приоритет"
        value={filter.priority}
        onChange={handleChange('priority')}
        select
        size="small"
      >
        <MenuItem value="all">Все</MenuItem>
        {TASK_PRIORITIES.map(p => (
          <MenuItem key={p} value={p}>{p}</MenuItem>
        ))}
      </TextField>

      <AppButton
          onClick={handleReset}
          variant="contained"
      >
          Сбросить
      </AppButton>
    </Stack>
  )
}
