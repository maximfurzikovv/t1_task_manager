import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './TaskItem.module.css';
import { AppButton } from '@shared/ui/Button/Button';
import { AppCard } from "@shared/ui/Card/AppCard";
import { AppChip } from "@shared/ui/Chip/AppChip";
export function TaskItem({ task }) {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/task/${task.id}`);
    };
    return (_jsx(AppButton, { onClick: handleEdit, children: _jsxs(AppCard, { className: styles.card, children: [_jsx(Typography, { className: styles.title, sx: { fontWeight: "bold" }, children: task.title }), task.description ? (_jsx(Typography, { variant: "body2", className: styles.description, children: task.description })) : (_jsx(Typography, { sx: { color: "rgba(85,85,85,0.43)", fontSize: "0.9rem" }, children: "\u041D\u0435\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F" })), _jsxs("div", { className: styles.chips, children: [_jsx(AppChip, { label: task.category }), _jsx(AppChip, { label: task.priority, className: styles[`priority${task.priority.replace(/\s/g, '')}`] }), _jsx(AppChip, { label: task.status, className: styles[`status${task.status.replace(/\s/g, '')}`] })] })] }) }));
}
