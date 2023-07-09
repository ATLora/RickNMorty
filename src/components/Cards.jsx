import Card from "./Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  //flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
`;

export default function Cards({ characters, onClose }) {
  return (
    <CardsContainer>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </CardsContainer>
  );
}
