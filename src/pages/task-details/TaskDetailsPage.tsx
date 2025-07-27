import { Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './TaskDetailsPage.module.css'
import type { Task } from '@entities/task/model/types'
import { EditTaskForm } from "@features/edit-task/ui/EditTaskForm";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@app/store";
import { createTask, updateTask } from "@entities/task/model/taskSlice";
import { v4 as uuidv4 } from 'uuid'

interface Props {
    isNew?: boolean
}

export function TaskDetailsPage({ isNew = false }: Props) {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const taskFromStore = useSelector((state: RootState) =>
        state.task.tasks.find((t) => t.id === id)
    )

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
    : taskFromStore!

    const handleBack = () => navigate('/')

    const handleSave = (task: Task) => {
        if (isNew) {
            dispatch(createTask(task))
        } else {
            dispatch(updateTask(task))
        }
        navigate('/')
    }


    if (!isNew && !taskFromStore) {
        return (
            <Typography variant="h6" color="error">Задача не найдена</Typography>
        )
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