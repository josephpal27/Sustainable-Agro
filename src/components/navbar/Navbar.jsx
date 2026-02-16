import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/logo/logo.webp";
import { Button } from "@mui/material";
import "./Navbar.css";

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={NavLink} to="/" className="nav-brand">
        <img src={logo} alt="logo" loading="eager" />
      </Navbar.Brand>

      {/* Toggle button for offcanvas */}
      <Navbar.Toggle onClick={handleShow} />

      <Navbar.Offcanvas
        show={show}
        onHide={handleClose}
        id="offcanvasNavbar-expand-lg"
        aria-labelledby="offcanvasNavbarLabel-expand-lg"
        placement="start"
      >
        <Offcanvas.Header>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
            <img src={logo} alt="logo" className="offCanvasLogo" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link as={NavLink} to="/" onClick={handleClose}>
              <Button className="nav-link-btn">Home</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleClose}>
              <Button className="nav-link-btn">About Us</Button>
            </Nav.Link>

            {/* Bootstrap Dropdown */}
            <NavDropdown title="Our Solutions" id="navbarDropdown">
              <NavDropdown.Item as={NavLink} to="/tandhan-power" onClick={handleClose}>
                <Button className="dropdown-item-btn">Tandhan Power</Button>
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tandhan-polyplast" onClick={handleClose}>
                <Button className="dropdown-item-btn">Tandhan Polyplast</Button>
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/riz-prime" onClick={handleClose}>
                <Button className="dropdown-item-btn">Riz Prime</Button>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/blogs" onClick={handleClose}>
              <Button className="nav-link-btn">Our Blogs</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/esg-and-impact" onClick={handleClose}>
              <Button className="nav-link-btn">ESG & Impact</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/careers" onClick={handleClose}>
              <Button className="nav-link-btn">Careers</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
              <Button className="nav-link-btn">Contact</Button>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default MyNavbar;
