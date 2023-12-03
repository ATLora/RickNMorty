import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = (props) => {
  const {
    onClose,
    name,
    species,
    gender,
    image,
    id,
    status,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const location = useLocation();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    console.log(location.pathname);
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className="border-2 border-blue-950 h-[480px] rounded-md shadow-lg">
      <div className="mx-2 pt-2 flex justify-end">
        {isFav ? (
          <button className="px-2 hover:scale-110" onClick={handleFavorite}>
            💛
          </button>
        ) : (
          <button className="px-2 hover:scale-110" onClick={handleFavorite}>
            🤍
          </button>
        )}
        {location.pathname !== "/favorites" && (
          <button className="hover:scale-110" onClick={() => onClose(id)}>
            ❌
          </button>
        )}
      </div>

      <img src={image} alt="" className="p-4 rounded-md" />

      <div className="flex flex-col justify-center items-center text-gray-300">
        <Link to={`/detail/${id}`}>
          <h2 className="text-xl text-green-500 hover:underline hover:scale-125">
            {name}
          </h2>
        </Link>
        <h3>Status: {status}</h3>
        <h3>Species: {species}</h3>
        <h3>Gender: {gender}</h3>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
