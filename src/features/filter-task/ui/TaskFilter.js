import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { TaskFilterContext } from '../model/context';
import { TASK_CATEGORIES, TASK_PRIORITIES, TASK_STATUSES } from '@entities/task/model/types';
import { MenuItem, TextField, Stack, Button } from '@mui/material';
export function TaskFilter() {
    const context = useContext(TaskFilterContext);
    if (!context)
        return null;
    const { filter, setFilter } = context;
    const handleChange = (field) => (e) => {
        setFilter({
            ...filter,
            [field]: e.target.value
        });
    };
    const handleReset = () => {
        setFilter({
            status: 'all',
            category: 'all',
            priority: 'all'
        });
    };
    return (_jsxs(Stack, { direction: "row", spacing: 2, sx: { mb: 3 }, flexWrap: "wrap", children: [_jsxs(TextField, { label: "\u0421\u0442\u0430\u0442\u0443\u0441", value: filter.status, onChange: handleChange('status'), select: true, size: "small", children: [_jsx(MenuItem, { value: "all", children: "\u0412\u0441\u0435" }), TASK_STATUSES.map(s => (_jsx(MenuItem, { value: s, children: s }, s)))] }), _jsxs(TextField, { label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F", value: filter.category, onChange: handleChange('category'), select: true, size: "small", children: [_jsx(MenuItem, { value: "all", children: "\u0412\u0441\u0435" }), TASK_CATEGORIES.map(c => (_jsx(MenuItem, { value: c, children: c }, c)))] }), _jsxs(TextField, { label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442", value: filter.priority, onChange: handleChange('priority'), select: true, size: "small", children: [_jsx(MenuItem, { value: "all", children: "\u0412\u0441\u0435" }), TASK_PRIORITIES.map(p => (_jsx(MenuItem, { value: p, children: p }, p)))] }), _jsx(Button, { onClick: handleReset, variant: "outlined", size: "small", sx: { color: "rgba(85,85,85,0.43)", borderColor: "rgba(85,85,85,0.43)" }, children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C" })] }));
}
