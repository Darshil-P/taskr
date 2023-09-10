import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import TasksPage from "./components/TasksPage";
import tasks from "./tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TasksPage items={tasks} />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
