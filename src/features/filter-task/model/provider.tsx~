import { useState } from "react";
import { TaskFilterContext} from "@features/filter-task/model/context.ts";
import type { TaskFilter } from "@features/filter-task/model/context.ts";
interface Props {
    children: React.ReactNode
}

const defaultFilter: TaskFilter = {
    status: 'all',
    category: 'all',
    priority: 'all'
}

export function TaskFilterProvider({ children }: Props) {
    const [filter, setFilter] = useState<TaskFilter>(defaultFilter)

    return (
        <TaskFilterContext.Provider value={{ filter, setFilter }} >
            {children}
        </TaskFilterContext.Provider>
    )
}