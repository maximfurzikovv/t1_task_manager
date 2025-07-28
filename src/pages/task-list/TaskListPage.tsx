import { TaskList } from '@entities/task/ui/TaskList'
import { Container, Typography, CircularProgress } from "@mui/material";
import styles from "./TaskListPage.module.css";
import { TaskFilter } from "@features/filter-task/ui/TaskFilter";
import { useNavigate } from "react-router-dom";
import { AppButton } from "@shared/ui/Button/Button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@app/store";
import { fetchTasks } from "@entities/task/model/taskSlice";
import { useSelector } from "react-redux";
import { RootState } from '@app/store'

/**
 * Страница списка задач.
 * Загружает задачи с сервера при монтировании и отображает их в виде списка.
 * Также включает фильтрацию и кнопку перехода к созданию новой задачи.
 */
export function TaskListPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    /**
     * Загружает список задач с сервера один раз при монтировании компонента.
     */
    useEffect(() => {
        dispatch(fetchTasks())
      }, [dispatch])
    const loading = useSelector((state: RootState) => state.task.loading)

    // Индикатор загрузки, если идёт запрос
    if (loading) {
    return (
      <Container className={styles.wrapper} sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <CircularProgress />
      </Container>
    );
  }

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
