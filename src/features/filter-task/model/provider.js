import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { TaskFilterContext } from "@features/filter-task/model/context";
const defaultFilter = {
    status: 'all',
    category: 'all',
    priority: 'all'
};
export function TaskFilterProvider({ children }) {
    const [filter, setFilter] = useState(defaultFilter);
    return (_jsx(TaskFilterContext.Provider, { value: { filter, setFilter }, children: children }));
}
