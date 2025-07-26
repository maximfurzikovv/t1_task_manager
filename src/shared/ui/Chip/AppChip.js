import { jsx as _jsx } from "react/jsx-runtime";
import { Chip } from '@mui/material';
export function AppChip(props) {
    return (_jsx(Chip, { size: "small", variant: "outlined", sx: { minWidth: 70 }, ...props }));
}
