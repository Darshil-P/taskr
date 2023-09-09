export type Task = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
};
