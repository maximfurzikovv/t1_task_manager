import { jsx as _jsx } from "react/jsx-runtime";
import { AppRouter } from './router/AppRouter';
import { TaskProvider } from '@entities/task/model/provider';
import { TaskFilterProvider } from "@features/filter-task/model/provider";
export function App() {
    return (_jsx(TaskProvider, { children: _jsx(TaskFilterProvider, { children: _jsx(AppRouter, {}) }) }));
}
