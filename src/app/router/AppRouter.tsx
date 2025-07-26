import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskListPage } from '@pages/task-list/index';
import { TaskDetailsPage } from '@pages/task-details';

const router = createBrowserRouter([
    {
        path: "/",
        element: <TaskListPage />
    },
    {
        path: "/task/:id",
        element: <TaskDetailsPage />
    }
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
};