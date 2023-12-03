import { connect, useDispatch } from "react-redux";
import Card from "../components/Card";
import { filterCards, orderCards } from "../Redux/actions";
import { useState } from "react";

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
    <div className="pt-8 w-full min-h-screen bg-blue-900">
      <div>
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
      </div>
      <div className="pt-8 grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
