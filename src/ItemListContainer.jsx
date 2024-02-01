import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  return (
    <>
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand href="#home" className="honk-uniquifier">
            Merch IT!
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-bar">
              Indumentaria
            </Nav.Link>
            <Nav.Link href="#features" className="nav-bar">
              Artículos de oficina
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-bar">
              Hogar y Tiempo Libre
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-bar">
              Mascotas
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
