import { FormEvent, FunctionComponent, useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { Task } from "../types/task";

interface EditTaskModalProps {
  task: Task;
  show: boolean;
  onSave: (task: Task) => void;
  onCancel: () => void;
}

const EditTaskModal: FunctionComponent<EditTaskModalProps> = ({
  task,
  show,
  onSave: handleSave,
  onCancel: handleCancel,
}) => {
  const [validated, setValidated] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      handleSave(task);
    }

    setValidated(true);
  }

  return (
    <>
      <Modal show={show} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="editTaskForm"
            noValidate
            validated={validated}
            onSubmit={(event) => handleSubmit(event)}
          >
            <Row className="mb-3">
              <Form.Group controlId="validationCustom01">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="sleep"
                  defaultValue={task.title}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a title.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom02">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  placeholder="more sleep"
                  defaultValue={task.description}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a description.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom03">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="dd/mm/yyyy"
                  defaultValue={task.dueDate.toISOString().slice(0, 10)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid date.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Form>
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
