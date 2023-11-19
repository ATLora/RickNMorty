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
    <div>
      <div>
        {isFav ? (
          <button onClick={handleFavorite}>💛</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {location.pathname !== "/favorites" && (
          <button onClick={() => onClose(id)}>❌</button>
        )}
      </div>
      <div>
        <img src={image} alt=""></img>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
      </div>

      <h3>Status: {status}</h3>
      <h3>Species: {species}</h3>
      <h3>Gender: {gender}</h3>
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
