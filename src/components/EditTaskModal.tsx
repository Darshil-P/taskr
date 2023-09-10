import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
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
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.title);
  const [dueDate, setDueDate] = useState(task.dueDate);

  function initialize() {
    setValidated(false);
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const updatedTask: Task = {
        ...task,
        title: title,
        description: description,
        dueDate: dueDate,
      };
      handleSave(updatedTask);
    }

    setValidated(true);
  }

  function handleTitleChange(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newTitle = event.currentTarget.value?.toString() ?? "";
    setTitle(newTitle);
  }

  function handleDescriptionChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newDescription = event.currentTarget.value?.toString() ?? "";
    setDescription(newDescription);
  }

  function handleDateChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newDate = new Date(event.currentTarget.value?.toString());
    setDueDate(newDate);
  }

  return (
    <>
      <Modal show={show} onHide={handleCancel} onShow={initialize} centered>
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
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="sleep"
                  value={title}
                  onChange={(e) => handleTitleChange(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a title.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  placeholder="more sleep"
                  value={description}
                  onChange={(e) => handleDescriptionChange(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a description.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group>
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  value={dueDate.toISOString().slice(0, 10)}
                  onChange={(e) => handleDateChange(e)}
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
