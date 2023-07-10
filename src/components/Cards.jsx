import Card from "./Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
            status={character.status}
            origin={character.origin.name}
            onClose={onClose}
            onFavorites={() => window.alert("Emulamos que tenemos un favorito")}
          />
        );
      })}
    </CardsContainer>
  );
}
