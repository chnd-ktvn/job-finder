import React from 'react';
import { Jumbotron as Jumbo, Container, Card, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import personImage from '../assets/kristin-wilson-z3htkdHUh5w-unsplash.jpg';
import workTogetherImage from '../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg';
import meetingImage from '../assets/charles-deluvio-Lks7vei-eAg-unsplash.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${personImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    margin-top: -20px;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .jumbo-text {
    padding-top: 60px;
    text-align: center;
  }
  .row {
    margin: 20px 0;
  }
  .row .col.text {
    padding: 6.25% 2%;
  }
  img {
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;

const MainHome = () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
          <h3 className="jumbo-text">Job Finder menawarkan Anda lebih dari <br/> sekadar iklan lowongan</h3>
      </Container>
    </Jumbo>
    <Card>
      <Container>
      <Row>
        <Col>
          <Image src={workTogetherImage} alt="" fluid/>
        </Col>
        <Col className="text">
          <h4>Proses melamar yang mudah dan efisien</h4>
          <p>Job Finder memiliki fitur utama yakni membuat proses melamar lebih mudah. Semuanya dapat diakses secara gratis.</p>
        </Col>
      </Row>
      <Row>
        <Col className="text">
          <h4>Pencarian kerja berdasarkan skill</h4>
          <p>Selain fitur diatas Job Finder juga memiliki fitur lain yakni pencarian kerja berdasarkan skill.</p>
        </Col>
        <Col>
          <Image src={meetingImage} alt="" fluid/>
        </Col>
      </Row>
      </Container>
    </Card>
    </Styles>
  )
}
export default MainHome;