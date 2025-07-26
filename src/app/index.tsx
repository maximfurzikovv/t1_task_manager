import { AppRouter } from './router/AppRouter'
import { TaskProvider } from '@entities/task/model/provider';
import { TaskFilterProvider } from "@features/filter-task/model/provider";

export function App() {
  return (
      <TaskProvider>
          <TaskFilterProvider>
            <AppRouter />
          </TaskFilterProvider>
      </TaskProvider>
  )
}
