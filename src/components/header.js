import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = ({ handleOpen, noJoin, setCareSeeker }) => {
  console.log(handleOpen)
  return (
    <Navbar bg="light" expand="lg" className="p-0">
      <Container>
        <Link to="/" className="text-dark text-decoration-none">
          <img src={process.env.PUBLIC_URL + "/assets/icons/logo.png"} alt="" />
          OngsterCare
        </Link>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse> */} 
        <Nav className="ml-auto">
          <Button variant="light" className="mx-2" onClick={() => handleOpen()}>
            Login
          </Button>
          {!noJoin && (
            <Link to="/join-us">
              <Button variant="flat" onClick={() => setCareSeeker(false)}>
                Join Now
              </Button>
            </Link>
          )}
        </Nav>
      </Container>

      <style type="text/css">
        {`
                .btn-flat {
                background-color: #28ace2;
                color: white;
                     }
                .btn-flat:hover {
                background-color: #28ace280;
                color: white;
                     }
                `}
      </style>
    </Navbar>
  );
};
