import { Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .card {
    border: 1px solid #0d6efd;
  }
  .card:hover {
    box-shadow: 0px 6px 25px rgba(79, 79, 224, 0.7);
  }
`;

const Cards = (props) => {
  console.log(props.dataCard)

  return (
    <Styles>
    <Row xs={1} md={3} className="g-4">{
      props.dataCard.map((data, idx) => {
        return <Col>
        <Card>
        <Card.Header>{data.job}</Card.Header>
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
              Skill yang dibutuhkan: {data.skill}
            </Card.Text>
            <Card.Text>
              Kota {data.city}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      })
    }
    </Row>
    </Styles>
  )
}
export default Cards;