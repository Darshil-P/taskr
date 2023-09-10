import tasks from "./tasks";
import { Task } from "./types/task";

export function setTasks(tasks: Array<Task>) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getTasks() {
  const tasksString = localStorage.getItem("tasks");
  if (tasksString) {
    return JSON.parse(tasksString);
  }
  setTasks(tasks);
  return tasks;
}
