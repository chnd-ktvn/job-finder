import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
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
  .navbar button a {
    color: white;
    text-decoration: none;
  }
  .navbar button:hover {
    box-shadow: 0px 6px 25px rgba(79, 79, 224, 0.7);
  }
  hr {
    border: 2px solid #0d6efd;
  }
`;

const Header = () => {
  return (
    <Styles>
      <Navbar>
        <Container>
        <Navbar.Brand>Job Finder</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button>
            <Link to="/search">Profile</Link>
          </Button>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </Styles>
  )
}
export default Header;