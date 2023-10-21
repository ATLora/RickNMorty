import { connect, useDispatch } from "react-redux";
import Card from "../components/Card";
import styled from "styled-components";
import { filterCards, orderCards } from "../Redux/actions";
import { useState } from "react";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Favorites = (props) => {
  const dispatch = useDispatch();
  const { myFavorites } = props;

  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <CardsContainer>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
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
