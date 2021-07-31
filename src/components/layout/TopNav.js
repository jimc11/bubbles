import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "./TopNav.module.css";

function TopNav(props) {
  return (
    <div>
      <Navbar
        variant="dark"
        style={{
          margin: "5px",
          borderRadius: "12px",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
        fixed="top"
        expand="sm"
      >
        <Container>
          <Navbar.Brand style={{display:"inline-block"}} href={props.link1}>Bubbles</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div style={{ marginLeft:"10px"}}>
                <Nav.Link style={{marginLeft:"5px", display:"inline-block"}} href={props.link2}>Section2</Nav.Link>
                <Nav.Link style={{marginLeft:"5px", display:"inline-block"}} href={props.link3}>Section3</Nav.Link>
              </div>

              <NavDropdown style={{position: "absolute",right: "10px"}} title="Other Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Page 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Page 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Page 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;
