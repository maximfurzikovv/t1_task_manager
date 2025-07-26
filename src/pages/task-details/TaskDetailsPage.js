import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './TaskDetailsPage.module.css';
import { EditTaskForm } from "@features/edit-task/ui/EditTaskForm";
import { useContext } from "react";
import { TaskContext } from "@entities/task/model/context";
export function TaskDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const context = useContext(TaskContext);
    if (!context)
        return null;
    const initialTask = context.tasks.find((task) => task.id === id);
    const handleBack = () => navigate('/');
    const handleSave = (updated) => {
        context.updateTask(updated);
        navigate('/');
    };
    if (!initialTask) {
        return (_jsx(Typography, { variant: "h6", color: "error", children: "\u0417\u0430\u0434\u0430\u0447\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" }));
    }
    return (_jsxs("div", { className: styles.container, children: [_jsx(Typography, { variant: "h2", className: styles.title, children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438" }), _jsx("div", { className: styles.formContainer, children: _jsx(EditTaskForm, { initialTask: initialTask, onSave: handleSave, onCancel: handleBack }) })] }));
}
