import Cards from './Cards';
import { Container, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    padding-top: 25px;
    padding-bottom: 35px;
  }
  Form {
    margin: auto 50px 40px 50px;
  }
  Button {
    margin-left: 5px;
  }
`;

const CardList = () => {
  const cards = [
    {id: 1, title: 'PT Sun', job: 'Back-end Developer', skill: "Javascript", city: 'Jakarta' },
    {id: 2, title: 'PT Moon', job: 'Front-end Developer', skill: "React", city: 'Depok' },
    {id: 3, title: 'Imajin', job: 'Fullstack Developer', skill: "React, PHP", city: 'Jakarta' },
    {id: 4, title: 'CV Maju Mundur', job: 'Front-end Developer', skill: "Vue", city: 'Jakarta' },
    {id: 5, title: 'PT Maju', job: 'Front-end Developer', skill: "Vue", city: 'Bekasi' }
  ];

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Styles>
      <Container>
        <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="eg: Vue"
          className="mr-2"
          aria-label="Search"
        />
        <Button>Search</Button>
        </Form>
        <Cards dataCard={cards} />
      </Container>
    </Styles>
  )
}
export default CardList;