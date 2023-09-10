import { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";
import { Task } from "../types/task";
import TaskForm from "./TaskForm";

interface EditTaskModalProps {
  task: Task;
  show: boolean;
  onSave: (task: Task) => void;
  onCancel: () => void;
}

const EditTaskModal: FunctionComponent<EditTaskModalProps> = ({
  task,
  show,
  onSave: handleSubmit,
  onCancel: handleCancel,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm id="editTaskForm" task={task} onSubmit={handleSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" form="editTaskForm" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTaskModal;
