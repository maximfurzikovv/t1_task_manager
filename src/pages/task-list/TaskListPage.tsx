import { TaskList } from '@entities/task/ui/TaskList'
import {Button, Container, Typography} from "@mui/material";
import styles from "./TaskListPage.module.css";
import {TaskFilter} from "@features/filter-task/ui/TaskFilter";
import { useNavigate } from "react-router-dom";
import { AppButton } from "@shared/ui/Button/Button";

export function TaskListPage() {
    const navigate = useNavigate()
    return (
      <Container className={styles.wrapper}>
        <Typography variant="h2" sx={{ mb: 3 }}>Менеджер задач</Typography>
          <AppButton
              variant="contained"
              sx={{ mb: 4, width: 200, fontSize: 16 }}
              onClick={() => navigate('/task/new')}
              >
              Создать задачу
          </AppButton>
          <TaskFilter />
        <TaskList />
      </Container>
  )
}
