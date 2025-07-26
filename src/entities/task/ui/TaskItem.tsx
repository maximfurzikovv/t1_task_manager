import { Card, Chip, Typography, Button } from '@mui/material'
import type { Task } from '../model/types'
import { useNavigate } from 'react-router-dom'
import styles from './TaskItem.module.css'
import { AppButton } from '@shared/ui/Button/Button'
import { AppCard } from "@shared/ui/Card/AppCard";
import { AppChip } from "@shared/ui/Chip/AppChip";

interface Props  {
    task: Task
}

export function TaskItem({ task }: Props) {
    const navigate = useNavigate()

    const handleEdit = () => {
        navigate(`/task/${task.id}`)
    }

    return (
        <AppButton onClick={handleEdit}>
            <AppCard className={styles.card}>
                <Typography className={styles.title} sx={{fontWeight: "bold"}}>{task.title}</Typography>

                {task.description ? (
                    <Typography variant="body2" className={styles.description}>
                        {task.description}
                    </Typography>
                ) : (
                    <Typography sx={{color: "rgba(85,85,85,0.43)", fontSize: "0.9rem"}}>
                        Нет описания
                    </Typography>
                )}

                <div className={styles.chips}>
                    <AppChip label={task.category}/>
                    <AppChip label={task.priority} className={styles[`priority${task.priority.replace(/\s/g, '')}`]}/>
                    <AppChip label={task.status} className={styles[`status${task.status.replace(/\s/g, '')}`]}/>
                </div>

            </AppCard>
        </AppButton>
    )
}