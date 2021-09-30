import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .card {
    color: white;
    background-color: #0d6efd;
    padding: 5vh 0;
  }
  .card-title {
    margin-bottom: 4vh; 
    font-size: 4vh;
    font-weight: 700;
  }
  hr {
    border: 2px solid white;
  }
  .row-contact {
    text-align: center;
  }
  .card-text i {
    padding-right: 2vh;
  }
  .copyright {
    margin-top: 5vh;
  }
`;

const Footer = () => {
  return (
    <Styles>
      <Card>
        <Container>
          <Row>
            <Card.Body>
              <Card.Title>Job Finder</Card.Title>
              <hr />
            </Card.Body>
            <Col>
            <Card.Body>
              <Card.Text>Job Finder adalah platform yang menyediakan pencari kerja dengan keterampilan berkelas. Kami menghubungkan perusahaan terkemuka dengan pencari kerja di Indonesia.</Card.Text>
            </Card.Body>
            </Col>
            <Col>
            <Card.Body>
              <Row className="row-contact">
                <Col>
                  <Card.Text><i class="bi bi-facebook"></i>/Job Finder</Card.Text>
                  <Card.Text><i class="bi bi-instagram"></i>/Job Finder</Card.Text>
                </Col>
                
                <Col>
                  <Card.Text><i class="bi bi-envelope"></i>/Job Finder</Card.Text>
                  <Card.Text><i class="bi bi-telephone"></i>081312345</Card.Text>
                </Col>
                <Card.Text className="copyright">&#169;2021JobFinder</Card.Text>
              </Row>
            </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </Styles>
  )
}
export default Footer;