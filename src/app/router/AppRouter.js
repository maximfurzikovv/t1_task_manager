import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskListPage } from '@pages/task-list/index';
import { TaskDetailsPage } from '@pages/task-details';
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(TaskListPage, {})
    },
    {
        path: "/task/:id",
        element: _jsx(TaskDetailsPage, {})
    }
]);
export function AppRouter() {
    return _jsx(RouterProvider, { router: router });
}
;
