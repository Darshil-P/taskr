import { FunctionComponent } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getTasks, setTasks } from "../storage";
import { Task } from "../types/task";
import TaskForm from "./TaskForm";

interface NewTaskPageProps {}

const NewTaskPage: FunctionComponent<NewTaskPageProps> = () => {
  const navigate = useNavigate();
  function handelSubmit(task: Task) {
    const tasks = getTasks();
    tasks.push(task);
    setTasks(tasks);
    navigate("/");
  }

  return (
    <Container className="w-96">
      <TaskForm id="saveTaskForm" onSubmit={handelSubmit} />
      <Row className="mt-8">
        <Col>
          <Button
            className="w-full"
            variant="secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </Col>
        <Col>
          <Button
            type="submit"
            form="saveTaskForm"
            className="w-full"
            variant="primary"
          >
            Save Changes
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewTaskPage;
