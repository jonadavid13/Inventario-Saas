import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import LogoSAAS from "../images/Farmacia_SAAS_logo_short.png";

function HeaderMain () {
    return (
      <>
        <div>
          <Navbar expand="md" className="bg-body-tertiary">
            <Container fluid className="d-flex align-items-center">
              <figure className="logo-container mb-0">
                <img
                  src={LogoSAAS}
                  alt="Logo de Farmacia SAAS"
                  className="img-logo"
                />
              </figure>

              <Navbar.Brand href="/" className="ms-3">
                Gestión de Inventario
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className="navbar-link nav-link" to="/inventario">
                    Inventario
                  </Link>
                  <Link className="navbar-link nav-link" to="/proveedores">
                    Proveedores
                  </Link>
                  <NavDropdown title="Usuario" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/inventario">
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