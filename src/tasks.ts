const tasks = [
  {
    id: crypto.randomUUID(),
    title: "create react app",
    description: "initialize the task tracker project",
    completed: true,
    dueDate: new Date("2023-9-10").toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: "view tasks",
    description: "view tasks list",
    completed: true,
    dueDate: new Date("2023-9-10").toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: "edit tasks",
    description: "edit existing tasks",
    completed: true,
    dueDate: new Date("2023-9-10").toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: "add tasks",
    description: "add new tasks",
    completed: true,
    dueDate: new Date("2023-9-10").toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: "store tasks",
    description: "persist tasks in local storage",
    completed: true,
    dueDate: new Date("2023-9-10").toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: "signup",
    description: "create users",
    completed: false,
    dueDate: new Date("2023-9-10").toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: "login",
    description: "allow user login",
    completed: false,
    dueDate: new Date("2023-9-10").toISOString(),
  },
];

export default tasks;
