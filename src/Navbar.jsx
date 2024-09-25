import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BasicExample() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/form'}>Form</Link>
            </Nav.Link>
          </Nav>

          {/* Search input appears only on the Home page */}
          {location.pathname === '/' && (
            <form className="d-flex">
              <input
                type="search"
                placeholder="Search"
                className="form-control me-2"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
