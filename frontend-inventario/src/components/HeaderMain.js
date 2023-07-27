import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import LogoSAAS from "../images/Farmacia_SAAS_logo_short.png";

function HeaderMain () {
    return (
      <>
        <div>
          <Navbar expand="md" className="bg-body-tertiary">
            <Container fluid className="d-flex align-items-center">
                <figure className="logo-container mb-0">
                    <img src={LogoSAAS} alt="Logo de Farmacia SAAS" className="img-logo"/>
                </figure>

              <Navbar.Brand href="#home" className="ms-3">Gestión de Inventario</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Inventario</Nav.Link>
                  <Nav.Link href="#link">Proveedores</Nav.Link>
                  <NavDropdown title="Usuario" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">
                      Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
}

export { HeaderMain };