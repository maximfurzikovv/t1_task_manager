import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Task } from "./types"
import { mockTasks } from "./mock"
import { taskApi } from "@shared/api/taskApi"

/**
 * Состояние задач в Redux store.
 */
interface TaskState {
  tasks: Task[]
  loading: boolean
  error: string | null
}

/**
 * Начальное состояние задач.
 */
const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null
}

/**
 * Асинхронное действие для загрузки, создания, обновления и удаления задач.
 * GET /tasks
 * POST /tasks
 * PATCH /tasks/:id
 * DELETE /tasks/:id
 */
export const fetchTasks = createAsyncThunk('task/fetchAll', taskApi.getAll)
export const createTask = createAsyncThunk('task/create', taskApi.create)
export const updateTask = createAsyncThunk('task/update', taskApi.update)
export const deleteTask = createAsyncThunk('task/delete', taskApi.remove)

/**
 * Redux slice для управления задачами (task).
 * Использует createAsyncThunk для обработки асинхронных запросов.
 */
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchTasks.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false
            state.tasks = action.payload
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Ошибка при загрузке"
        })

        .addCase(createTask.fulfilled, (state, action) => {
            state.tasks.push(action.payload)
        })
        .addCase(updateTask.fulfilled, (state, action) => {
            const idx = state.tasks.findIndex(t => t.id === action.payload.id)
            if (idx !== -1) state.tasks[idx] = action.payload
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
          state.tasks = state.tasks.filter(t => t.id !== action.meta.arg)
        })
  }

})

export default taskSlice.reducer
