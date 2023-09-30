import { connect } from "react-redux";
import Card from "../components/Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Favorites = (props) => {
  const { myFavorites } = props;
  return (
    <CardsContainer>
      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            status={char.status}
          />
        );
      })}
    </CardsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
