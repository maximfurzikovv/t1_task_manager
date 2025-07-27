import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '@entities/task/model/taskSlice';

/**
 * Корневой Redux store приложения.
 */
export const store = configureStore({
    reducer: {
        task: taskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch