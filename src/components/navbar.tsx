import { FunctionComponent } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface NavbarrProps {}

const Navbarr: FunctionComponent<NavbarrProps> = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">Trackr</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/" active>
              Tasks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
