import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, MenuItem, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import styles from '@pages/task-details/TaskDetailsPage.module.css';
import { TASK_CATEGORIES, TASK_STATUSES, TASK_PRIORITIES } from '@entities/task/model/types';
export function EditTaskForm({ initialTask, onSave, onCancel }) {
    const [task, setTask] = useState(initialTask);
    const handleChange = (field) => (e) => {
        setTask({
            ...task,
            [field]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(task);
    };
    return (_jsx("form", { onSubmit: handleSubmit, children: _jsxs(Stack, { spacing: 3, children: [_jsx(TextField, { label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438", value: task.title, onChange: handleChange('title'), fullWidth: true, className: styles.textField }), _jsx(TextField, { label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438", value: task.description ?? '', onChange: handleChange('description'), multiline: true, rows: 2, fullWidth: true, className: styles.textField }), _jsx(TextField, { label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438", value: task.category, onChange: handleChange('category'), select: true, fullWidth: true, className: styles.textField, children: TASK_CATEGORIES.map((option) => (_jsx(MenuItem, { value: option, children: option }, option))) }), _jsx(TextField, { label: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u0434\u0430\u0447\u0438", value: task.status, onChange: handleChange('status'), select: true, fullWidth: true, className: styles.textField, children: TASK_STATUSES.map((option) => (_jsx(MenuItem, { value: option, children: option }, option))) }), _jsx(TextField, { label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0437\u0430\u0434\u0430\u0447\u0438", value: task.priority, onChange: handleChange('priority'), select: true, fullWidth: true, className: styles.textField, children: TASK_PRIORITIES.map((option) => (_jsx(MenuItem, { value: option, children: option }, option))) }), _jsxs("div", { className: styles.buttonGroup, children: [_jsx(Button, { type: "submit", variant: "contained", className: styles.saveButton, children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" }), _jsx(Button, { variant: "outlined", onClick: onCancel, className: styles.cancelButton, children: "\u041D\u0430\u0437\u0430\u0434" })] })] }) }));
}
