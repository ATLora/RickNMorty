import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const CardConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  width: fit-content;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid green;
  backdrop-filter: blur(5px);
  margin: 1rem;
  box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
`;

const Title = styled.h2`
  font-family: cursive;
  font-weight: 700;
  font-size: 20px;
  color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  margin-top: 250px;
  background-color: #00800076;
`;

const Button = styled.button`
  display: inline-block;
  background-color: ${(props) => (props.close ? "transparent" : "black")};
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  filter: brightness(0.8);
  margin: 5px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
    transform: scale(1.2);
  }
`;

const ButtonConteiner = styled.div`
  display: flex;
  justify-content: right;
`;

const CardInfo = styled.h2`
  font-family: cursive;
  font-size: 0.8rem;
  font-weight: 400;
  color: white;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const imgDiv = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

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
    <CardConteiner>
      <ButtonConteiner>
        {isFav ? (
          <Button onClick={handleFavorite}>💛</Button>
        ) : (
          <Button onClick={handleFavorite}>🤍</Button>
        )}
        {location.pathname !== "/favorites" && (
          <Button onClick={() => onClose(id)}>❌</Button>
        )}
      </ButtonConteiner>
      <imgDiv>
        <Image src={image} alt=""></Image>
        <Link to={`/detail/${id}`}>
          <Title>{name}</Title>
        </Link>
      </imgDiv>

      <CardInfo>Status: {status}</CardInfo>
      <CardInfo>Species: {species}</CardInfo>
      <CardInfo>Gender: {gender}</CardInfo>
    </CardConteiner>
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