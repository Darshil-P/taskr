import { FunctionComponent } from "react";
import { Button } from "react-bootstrap";
import { Task } from "../types/task";

interface TaskTableProps {
  items: Array<Task>;
  onChange: (slectedIndex: number) => void;
  onEditTask: (selectedIndex: number) => void;
  onDelete: (slectedIndex: number) => void;
}

const TaskTable: FunctionComponent<TaskTableProps> = ({
  items,
  onChange: handleStatusChange,
  onEditTask: handleShow,
  onDelete: handleDelete,
}) => {
  if (items.length == 0) return "No Tasks Found";

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
        {items.map(({ id, completed, title, description, dueDate }, index) => {
          return (
            <tr key={id} className={completed ? "opacity-50 line-through" : ""}>
              <th scope="row">{index + 1}</th>
              <td>
                <div className="row">
                  <input
                    className="form-check-input px-2 ml-2 col-auto"
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(index)}
                    id={id}
                  />
                  <label
                    className="form-check-label mx-1 col-auto"
                    htmlFor={id}
                  >
                    {completed ? "Done" : "Pending"}
                  </label>
                </div>
              </td>
              <td>{title}</td>
              <td>{description}</td>
              <td>{new Date(dueDate).toDateString()}</td>
              <td>
                <div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <span className="m-1" />
                  <Button
                    variant="primary btn-sm"
                    onClick={() => handleShow(index)}
                  >
                    Edit
                  </Button>
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
