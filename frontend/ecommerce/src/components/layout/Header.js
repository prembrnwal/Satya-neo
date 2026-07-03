import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/satya-logo.png";

function Header() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: "rgba(7,27,52,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
        padding: "14px 0",
      }}
      variant="dark"
    >
      <Container>

        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
        >
          <img
            src={logo}
            alt="SATYA-EO"
            style={{
              height: "60px",
              width: "auto",
            }}
          />
        </Navbar.Brand>
    
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">

          <Nav className="mx-auto">

            <Nav.Link
              href="#"
              style={{ color: "white", marginRight: "18px" }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#"
              style={{ color: "white", marginRight: "18px" }}
            >
              Technology
            </Nav.Link>

            <Nav.Link
              href="#"
              style={{ color: "white", marginRight: "18px" }}
            >
              Applications
            </Nav.Link>

            <Nav.Link
              href="#"
              style={{ color: "white", marginRight: "18px" }}
            >
              Dashboard
            </Nav.Link>

            <Nav.Link
              href="#"
              style={{ color: "white" }}
            >
              About
            </Nav.Link>

          </Nav>

          <div className="d-flex">

            <Button
              variant="outline-light"
              style={{
                borderRadius: "30px",
                padding: "8px 22px",
                marginRight: "10px",
              }}
            >
              Login
            </Button>

            <Button
              style={{
                background: "linear-gradient(90deg,#2D7FF9,#4CC9F0)",
                border: "none",
                borderRadius: "30px",
                padding: "8px 24px",
                fontWeight: "600",
              }}
            >
              Launch Demo
            </Button>

          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;