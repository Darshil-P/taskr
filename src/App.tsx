import { useState } from "react";
import "./App.css";
import EditTaskModal from "./components/EditTaskModal";
import TaskTable from "./components/TaskTable";
import Navbar from "./components/navbar";
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

  const [showEditModal, setShowEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  function handleChange(index: number) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function handleDelete(index: number) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function handleEditTask(index: number) {
    setEditIndex(index);
    setShowEdit(true);
  }

  function handleCancelEdit() {
    setShowEdit(false);
  }

  function handleSaveEdit(updatedTask: Task) {
    setShowEdit(false);
    const index = tasks.findIndex((task) => task.id == updatedTask.id);
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  }

  function handleCreate() {
    console.log(`Create todo unimplemented`);
  }

  return (
    <>
      <Navbar />
      <button onClick={handleCreate} className="btn btn-success w-full my-4">
        + Add new Task
      </button>
      <TaskTable
        items={tasks}
        onChange={(index) => handleChange(index)}
        onDelete={(index) => handleDelete(index)}
        onEditTask={(index) => handleEditTask(index)}
      />
      <EditTaskModal
        task={tasks[editIndex]}
        show={showEditModal}
        onCancel={handleCancelEdit}
        onSave={(task) => handleSaveEdit(task)}
      />
    </>
  );
}

export default App;
