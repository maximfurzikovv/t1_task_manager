import { AppRouter } from './router/AppRouter'
import { TaskProvider } from '@entities/task/model/provider.tsx';
import { TaskFilterProvider } from "@features/filter-task/model/provider.tsx";

export function App() {
  return (
      <TaskProvider>
          <TaskFilterProvider>
            <AppRouter />
          </TaskFilterProvider>
      </TaskProvider>
  )
}
