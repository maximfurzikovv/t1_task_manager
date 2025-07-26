import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { TaskContext } from "./context";
import { mockTasks } from "@entities/task/model/mock";
export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(mockTasks);
    const updateTask = (updated) => {
        setTasks(prev => prev.map(task => (task.id === updated.id ? updated : task)));
    };
    return (_jsx(TaskContext.Provider, { value: { tasks, updateTask }, children: children }));
}
