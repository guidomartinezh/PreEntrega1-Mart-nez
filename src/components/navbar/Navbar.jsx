import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Categories from "../categories/Categories";

export const Navbarr = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontFamily: "Honk, system-ui", fontSize: "30px" }}
        >
          MERCH IT!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Categories />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
