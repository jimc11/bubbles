import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function TopNav(props) {
  return (
    <div>
      <Navbar fixed="top" expand="sm"  bg="light" >
        <Container>
          <Navbar.Brand href={props.link1}>Bubbles</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href={props.link2}>Section2</Nav.Link>
              <Nav.Link href={props.link3}>Section3</Nav.Link>
              <Nav.Link href={props.link4}>Section4</Nav.Link>
              <NavDropdown title="Other Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Page 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Page 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Page 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;
