import { useState } from "react";
import "./App.css";
import TaskTable from "./components/tasktable";
import { Task } from "./types/task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "task1",
      description: "description1",
      completed: false,
      dueDate: new Date("2023-10-1"),
    },
    {
      id: crypto.randomUUID(),
      title: "task2",
      description: "description2",
      completed: false,
      dueDate: new Date("2023-10-10"),
    },
    {
      id: crypto.randomUUID(),
      title: "task3",
      description: "description3",
      completed: true,
      dueDate: new Date("2023-10-20"),
    },
    {
      id: crypto.randomUUID(),
      title: "task4",
      description: "description4",
      completed: true,
      dueDate: new Date("2023-10-30"),
    },
  ]);

  function handleChange(task: Task) {
    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks[index].completed = !task.completed;
    setTasks(newTasks);
  }

  function handleDelete(taskId: string) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <>
      <TaskTable
        items={tasks}
        onChange={(task) => handleChange(task)}
        onDelete={(taskId) => handleDelete(taskId)}
      />
    </>
  );
}

export default App;
