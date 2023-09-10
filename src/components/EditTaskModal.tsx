import { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";
import { Task } from "../types/task";

interface EditTaskProps {
  task: Task;
  show: boolean;
  onShow: (task: Task) => void;
  onSave: (task: Task) => void;
  onCancel: () => void;
}

const EditTask: FunctionComponent<EditTaskProps> = ({
  task,
  show,
  onShow: handleShow,
  onSave: handleSave,
  onCancel: handleCancel,
}) => {
  return (
    <>
      <Button variant="primary btn-sm" onClick={() => handleShow(task)}>
        Edit
      </Button>

      <Modal show={show} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSave(task)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
