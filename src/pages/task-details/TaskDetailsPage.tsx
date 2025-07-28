import { Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './TaskDetailsPage.module.css'
import type { Task } from '@entities/task/model/types'
import { EditTaskForm } from "@features/edit-task/ui/EditTaskForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@app/store";
import { createTask, updateTask } from "@entities/task/model/taskSlice";
import { v4 as uuidv4 } from 'uuid'
import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { taskApi } from '@shared/api/taskApi'

/**
 * Страница создания или редактирования задачи.
 * Если isNew=true - создаётся новая задача, иначе загружается задача по ID из URL.
 */
interface Props {
    /** Флаг, указывающий, создаётся ли новая задача */
    isNew?: boolean
}

export function TaskDetailsPage({ isNew = false }: Props) {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [taskData, setTaskData] = useState<Task | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    /**
     * При редактировании задачи - загружает задачу с сервера по ID.
     * Вызывает API GET /tasks/:id
     */
    useEffect(() => {
      if (!isNew && id) {
        setLoading(true)
        taskApi.getById(id)
          .then(data => setTaskData(data))
          .catch(() => setError('Задача не найдена'))
          .finally(() => setLoading(false))
      }
    }, [id, isNew])

    /**
     * Исходное состояние задачи:
     * - при создании - пустой шаблон с uuid и текущей датой
     * - при редактировании - полученная с сервера задача
     */
    const initialTask: Task = isNew
    ? {
        id: uuidv4(),
        title: '',
        description: '',
        category: 'Bug',
        status: 'To Do',
        priority: 'Low',
        createdAt: new Date().toISOString(),
      }
    : taskData!

    const handleBack = () => navigate('/')

    /**
     * Обработчик сохранения задачи.
     * В зависимости от режима вызывает:
     * - POST /tasks - для создания
     * - PATCH /tasks/:id - для обновления
     * После успешного ответа переходит на главную.
     */
    const handleSave = async (task: Task) => {
      try {
        const resultAction = isNew
          ? await dispatch(createTask(task))
          : await dispatch(updateTask(task))

        unwrapResult(resultAction)
        navigate('/')
      } catch (err) {
        alert('Ошибка при сохранении задачи')
      }
    }


    if (!isNew && loading) {
      return <Typography>Загрузка...</Typography>
    }

    if (!isNew && error) {
      return <Typography color="error">{error}</Typography>
    }

    if (!isNew && !taskData) {
      return null
    }

    return (
        <div className={styles.container}>
            <Typography variant="h2" className={styles.title}>
                {isNew? 'Создание задачи' : 'Редактирование задачи'}
            </Typography>

            <div className={styles.formContainer}>
                <EditTaskForm
                    initialTask={initialTask}
                    onSave={handleSave}
                    onCancel={handleBack}
                />
            </div>
        </div>
    )
}