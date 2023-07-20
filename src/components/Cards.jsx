import Card from "./Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default function Cards({ characters, onClose }) {
  return (
    <CardsContainer>
      {characters.map(({ id, name, species, gender, image, status }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            onClose={onClose}
            onFavorites={() => window.alert("Emulamos que tenemos un favorito")}
          />
        );
      })}
    </CardsContainer>
  );
}
