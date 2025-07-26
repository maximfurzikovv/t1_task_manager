import { Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './TaskDetailsPage.module.css'
import { mockTasks } from "@entities/task/model/mock.ts";
import type { Task } from '@entities/task/model/types'
import { EditTaskForm } from "@features/edit-task/ui/EditTaskForm.tsx";
import { useContext } from "react";
import { TaskContext } from "@entities/task/model/context.ts";

export function TaskDetailsPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const context = useContext(TaskContext)
    if (!context) return null

    const initialTask = context.tasks.find((task: Task) => task.id === id)
    const handleBack = () => navigate('/')
    const handleSave = (updated: Task) => {
        context.updateTask(updated)
        navigate('/')
    }


    if (!initialTask) {
        return (
            <Typography variant="h6" color="error">Задача не найдена</Typography>
        )
    }

    return (
        <div className={styles.container}>
            <Typography variant="h2" className={styles.title}>
                Редактирование задачи
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