import {IconButton, Typography} from '@mui/material'
import type { Task } from '../model/types'
import { useNavigate } from 'react-router-dom'
import styles from './TaskItem.module.css'
import { AppButton } from '@shared/ui/Button/Button'
import { AppCard } from "@shared/ui/Card/AppCard";
import { AppChip } from "@shared/ui/Chip/AppChip";
import { deleteTask } from "@entities/task/model/taskSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@app/store";
import DeleteIcon from '@mui/icons-material/Delete'

interface Props  {
    task: Task
}

export function TaskItem({ task }: Props) {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const handleEdit = () => {
        navigate(`/task/${task.id}`)
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation()
        dispatch(deleteTask(task.id))
    }

    const formatDate = (iso: string): string =>
      new Date(iso).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })


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

                <div className={styles.meta}>
                    <AppButton
                        onClick={(e) => {
                            e.stopPropagation()
                            handleDelete(e)
                        }}
                        className={styles.deleteButton}
                    >
                        <DeleteIcon fontSize="small" />
                    </AppButton>

                    <Typography
                      variant="caption"
                      className={styles.date}
                    >
                      {formatDate(task.createdAt)}
                    </Typography>
                </div>
            </AppCard>
        </AppButton>
    )
}