import { TaskList } from '@entities/task/ui/TaskList'
import { Container, Typography } from "@mui/material";
import styles from "./TaskListPage.module.css";
import {TaskFilter} from "@features/filter-task/ui/TaskFilter.tsx";

export function TaskListPage() {
  return (
      <Container className={styles.wrapper}>
        <Typography variant="h2" sx={{ mb: 5 }}>Менеджер задач</Typography>
        <TaskFilter />
        <TaskList />
      </Container>
  )
}
