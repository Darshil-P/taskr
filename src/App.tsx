import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewTaskPage from "./components/NewTaskPage";
import TasksPage from "./components/TasksPage";
import tasks from "./tasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage items={tasks} />} />
      <Route path="/new" element={<NewTaskPage />} />
    </Routes>
  );
}

export default App;
