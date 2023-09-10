import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Task } from "../types/task";
import EditTaskModal from "./EditTaskModal";
import TaskTable from "./TaskTable";

interface TasksPageProps {
  items: Array<Task>;
}

const TasksPage: FunctionComponent<TasksPageProps> = ({ items }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(items);
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
    navigate("/new");
    console.log(`Create todo unimplemented`);
  }

  return (
    <>
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
};

export default TasksPage;
