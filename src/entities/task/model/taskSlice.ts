import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Task } from "./types"
import { mockTasks } from "./mock"

/**
 * Состояние задач в Redux store.
 */
interface TaskState {
  tasks: Task[]
}

/**
 * Начальное состояние задач (по умолчанию — моки).
 */
const initialState: TaskState = {
  tasks: mockTasks,
}

/**
 * Загружает задачи из localStorage.
 * @returns Массив задач из localStorage или mockTasks по умолчанию.
 */
const loadTasks = (): Task[] => {
  try {
    const stored = localStorage.getItem("tasks")
    return stored ? JSON.parse(stored) : mockTasks
  } catch {
    return mockTasks
  }
}

/**
 * Сохраняет задачи в localStorage.
 * @param tasks Список задач для сохранения.
 */
const saveTasks = (tasks: Task[]) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } catch {
    console.warn("Не удалось сохранить задачи в localStorage")
  }
}

/**
 * Redux slice для управления задачами (task).
 */
const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: loadTasks(), // начальная загрузка из localStorage
  },
  reducers: {
    /**
     * Создаёт новую задачу.
     * @param state Текущее состояние
     * @param action Задача для добавления
     */
    createTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload)
      saveTasks(state.tasks)
    },

    /**
     * Обновляет существующую задачу по ID.
     * @param state Текущее состояние
     * @param action Обновлённая задача
     */
    updateTask(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index !== -1) {
        state.tasks[index] = action.payload
        saveTasks(state.tasks)
      }
    },

    /**
     * Удаляет задачу по ID.
     * @param state Текущее состояние
     * @param action ID задачи, которую нужно удалить
     */
    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      )
      saveTasks(state.tasks)
    },
  },
})

export const { createTask, updateTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer
