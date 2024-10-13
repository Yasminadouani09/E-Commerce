import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo  from "../assests/logo.png";
function NavBar() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <img
              src={logo}
              alt="logo"
              className="px-5"
              style={{ width: "50", height: 50, objectFit: "cover" }}
            />
            <div className="d-flex px-5 gap-5 justify-content-center w-100">
              <Nav.Link href="#action1">Home</Nav.Link>

              <Nav.Link href="#action2">Info</Nav.Link>

              <Nav.Link href="#" disabled>
                Release
              </Nav.Link>
              <Nav.Link href="#" disabled>
                Video
              </Nav.Link>
              <Nav.Link href="#" disabled>
                Merch
              </Nav.Link>
            </div>
            <div className="px-4">
              <button className="btn btn-danger px-5  ">Book Us</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
