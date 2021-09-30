import Cards from './Cards';
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    padding: 25px;
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

  return (
    <Styles>
      <Container>
        <Cards dataCard={cards} />
      </Container>
    </Styles>
  )
}
export default CardList;