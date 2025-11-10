import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo.png";

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
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleClose}>
              About Us
            </Nav.Link>

            {/* Bootstrap Dropdown */}
            <NavDropdown title="Brands" id="navbarDropdown">
              <NavDropdown.Item as={NavLink} to="/tandhan-power" onClick={handleClose}>
                Tandhan Power
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tandhan-polyplast" onClick={handleClose}>
                Tandhan Polyplast
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/riz-prime" onClick={handleClose}>
                Riz Prime
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/media" onClick={handleClose}>
              Media
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blogs" onClick={handleClose}>
              Blogs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default MyNavbar;
