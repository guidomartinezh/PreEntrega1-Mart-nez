import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Categories from "../categories/Categories";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbarr = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="foldit-uniquifier">
          <Link to={"/"}>MERCH IT!</Link>
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
