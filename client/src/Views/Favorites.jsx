import { connect, useDispatch } from "react-redux";
import Card from "../components/Card";
import { filterCards, orderCards } from "../Redux/actions";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className=" w-full min-h-screen bg-blue-900">
      <motion.div
        className="flex flex-row fixed"
        initial={{ x: -200 }}
        whileHover={{ x: 0 }}
      >
        <div className="h-[400px] w-[200px] bg-slate-500 border shadow-sm border-slate-600  flex  flex-col">
          <h2>appearance</h2>
          <select
            onChange={handleOrder}
            className="bg-gray-200 border border-gray-900 text-slate-500 text-xl rounded-lg w-[180px]"
          >
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <h2>Gender</h2>
          <select
            onChange={handleFilter}
            className="bg-gray-200 border border-gray-900 text-slate-500 text-xl rounded-lg w-[180px]"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
          <h2>Status</h2>
          <select className="bg-gray-200 border border-gray-900 text-slate-500 text-xl rounded-lg w-[180px]">
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
          </select>
          <h2>Species</h2>
          <select className="bg-gray-200 border border-gray-900 text-slate-500 text-xl rounded-lg w-[180px]">
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
        </div>
        <button className="text-gray-200 text-2xl h-12 border-2  border-green-600 bg-green-500 hover:bg-green-600 hover:border-green-700 py-1 px-2 rounded-sm">
          Filther
        </button>
      </motion.div>

      <div className="pt-[50px] grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
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
