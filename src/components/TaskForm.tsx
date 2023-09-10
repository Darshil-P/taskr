import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Task } from "../types/task";

interface TaskFormProps {
  id?: string;
  task?: Task;
  onSubmit: (task: Task) => void;
}

const TaskForm: FunctionComponent<TaskFormProps> = ({ id, task, onSubmit }) => {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState(task?.title ?? "");
  const [description, setDescription] = useState(task?.description ?? "");
  const [dueDate, setDueDate] = useState(
    task?.dueDate ?? new Date().toISOString()
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const updatedTask: Task = {
        id: task?.id ?? crypto.randomUUID(),
        title: title,
        description: description,
        dueDate: dueDate,
        completed: task?.completed ?? false,
      };
      onSubmit(updatedTask);
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
    const newDate = new Date(
      event.currentTarget.value?.toString()
    ).toISOString();
    setDueDate(newDate);
  }

  return (
    <Form
      id={id}
      noValidate
      validated={validated}
      onSubmit={(event) => handleSubmit(event)}
    >
      <Row className="mb-3">
        <Form.Group>
          <Form.Label className="w-full text-left mt-3">Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="sleep"
            value={title}
            onChange={(e) => handleTitleChange(e)}
          />
          <Form.Control.Feedback className="w-full text-left" type="invalid">
            Please provide a title.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group>
          <Form.Label className="w-full text-left">Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="more sleep"
            value={description}
            onChange={(e) => handleDescriptionChange(e)}
          />
          <Form.Control.Feedback className="w-full text-left" type="invalid">
            Please provide a description.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="w-full text-left">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            value={dueDate.slice(0, 10)}
            onChange={(e) => handleDateChange(e)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default TaskForm;
