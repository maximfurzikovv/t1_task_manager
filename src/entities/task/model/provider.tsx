import { useState } from "react";
import type { Task } from "./types";
import { TaskContext } from "./context";
import { mockTasks } from "@entities/task/model/mock";

interface Props {
    children: React.ReactNode
}

export function TaskProvider({ children }: Props) {
    const [tasks, setTasks] = useState<Task[]>(mockTasks)

    const updateTask = (updated: Task) => {
        setTasks(prev =>
            prev.map(task => (task.id === updated.id ? updated : task))
        )
    }

    return (
        <TaskContext.Provider value={{ tasks, updateTask}}>
            {children}
        </TaskContext.Provider>
    )
}