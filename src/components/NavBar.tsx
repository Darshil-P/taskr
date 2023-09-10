import { FunctionComponent } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

interface NavbarrProps {}

const NavigationBar: FunctionComponent<NavbarrProps> = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">Trackr</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Item>
              <Link to="/">Tasks</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
