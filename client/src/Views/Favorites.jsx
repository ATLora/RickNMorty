import { connect, useDispatch } from "react-redux";
import Card from "../components/Card";
import {
  filterCards,
  filtherBySpecies,
  filtherByStatus,
  orderCards,
  resetFilthers,
} from "../Redux/actions";
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

  const handleStatus = (e) => {
    dispatch(filtherByStatus(e.target.value));
  };

  const handleSpecies = (e) => {
    dispatch(filtherBySpecies(e.target.value));
  };

  const handleReset = () => {
    dispatch(resetFilthers());
  };

  return (
    //* SLideBar Filther Menu

    <div className=" w-full min-h-screen bg-blue-900">
      <motion.div
        className="flex flex-row fixed"
        initial={{ x: -200 }}
        whileHover={{ x: 0 }}
      >
        <div className="h-[310px] w-[200px] bg-slate-500 border shadow-sm border-slate-600  flex  flex-col items-center justify-even">
          <h2 className="text-gray-200 text-xl">Order</h2>
          <select
            onChange={handleOrder}
            className="bg-gray-200 border border-gray-900 text-slate-500 text-xl rounded-lg w-[180px]"
          >
            <option value="PH">--------------</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <h2 className="text-gray-200 text-xl">Gender</h2>
          <select
            onChange={handleFilter}
            className="bg-gray-200 border border-gray-900 text-slate-500 text-xl rounded-lg w-[180px]"
          >
            <option value="PH">--------------</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
          <h2 className="text-gray-200 text-xl">Status</h2>
          <select
            onChange={handleStatus}
            className="bg-gray-200 border border-gray-900 text-slate-500 text-xl rounded-lg w-[180px]"
          >
            <option value="PH">--------------</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
          </select>
          <h2 className="text-gray-200 text-xl">Species</h2>
          <select
            onChange={handleSpecies}
            className="bg-gray-200 border border-gray-900 text-slate-500 text-xl rounded-lg w-[180px]"
          >
            <option value="PH">--------------</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
          <button
            onClick={handleReset}
            className="text-gray-200 text-xl mt-3 h-10 border-2  border-red-600 bg-red-500 hover:bg-red-600 hover:border-red-700 py-1 px-2 rounded-lg"
          >
            Clear All
          </button>
        </div>
        <button className="text-gray-200 text-2xl h-12 border-2  border-green-600 bg-green-500 hover:bg-green-600 hover:border-green-700 py-1 px-2 rounded-sm">
          Filther
        </button>
      </motion.div>

      {/* {Display Favorites} */}

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
