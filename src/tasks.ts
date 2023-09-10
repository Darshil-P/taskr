const tasks = [
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
];

export default tasks;
