import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    margin-top: 20px;
  }
  .navbar-brand {
    font-size: 5vh;
    font-weight: 700;
  }
  .navbar button {
    color: white;
    padding: 10px 20px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .navbar button:hover, .nav-item .nav-link a:hover {
    box-shadow: 0px 6px 25px rgba(79, 79, 224, 0.7);
  }
  .nav-item .nav-link a {
    text-decoration: none;
    color: black;
    border: none;
    padding: 4vh;
  }
  .nav-item .nav-link a:hover {
    border-radius: 10px;
  }
  .nav-link i {
    color: #0d6efd;
    padding-right: 1vh;
    margin-left: 7vh;
  }
  hr {
    border: 2px solid #0d6efd;
  }
`;

const HeaderCollapse = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand>Job Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">Beranda</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/search">Cari Lowongan</Link>
              </Nav.Link>
            </Nav.Item>
            </Nav>
            <Nav>
                <Nav.Link>
                <i class="bi bi-bell-fill"></i>
                Notification
                </Nav.Link>
                <Nav.Link>
                <i class="bi bi-person-fill"></i>
                Account
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      <hr />
    </Styles>
  )
}
export default HeaderCollapse;