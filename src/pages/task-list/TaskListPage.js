import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TaskList } from '@entities/task/ui/TaskList';
import { Container, Typography } from "@mui/material";
import styles from "./TaskListPage.module.css";
import { TaskFilter } from "@features/filter-task/ui/TaskFilter";
export function TaskListPage() {
    return (_jsxs(Container, { className: styles.wrapper, children: [_jsx(Typography, { variant: "h2", sx: { mb: 5 }, children: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0430\u0434\u0430\u0447" }), _jsx(TaskFilter, {}), _jsx(TaskList, {})] }));
}
