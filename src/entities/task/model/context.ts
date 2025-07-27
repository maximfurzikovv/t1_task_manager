import { createContext } from "react";
import type { Task } from "./types";

export interface TaskContextType {
    tasks: Task[]
    updateTask: (updated: Task) => void
}

export const TaskContext = createContext<TaskContextType | null>(null)