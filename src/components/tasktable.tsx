import { FunctionComponent } from "react";
import { Task } from "../types/task";

interface TaskTableProps {
  items: Array<Task>;
  onChange: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

const TaskTable: FunctionComponent<TaskTableProps> = ({
  items,
  onChange: handleStatusChange,
  onEdit: handleEdit,
  onDelete: handleDelete,
}) => {
  {
    if (items.length == 0) return "No Tasks Found";
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Status</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Due</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((task, index) => {
          return (
            <tr
              key={task.id}
              className={task.completed ? "opacity-50 line-through" : ""}
            >
              <th scope="row">{index + 1}</th>
              <td>
                <div className="row">
                  <input
                    className="form-check-input px-2 ml-2 col-auto"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleStatusChange(task)}
                    id={task.id}
                  />
                  <label
                    className="form-check-label mx-1 col-auto"
                    htmlFor={task.id}
                  >
                    {task.completed ? "Done" : "Pending"}
                  </label>
                </div>
              </td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate.toDateString()}</td>
              <td>
                <div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                  <span className="m-1" />
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(task)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TaskTable;
