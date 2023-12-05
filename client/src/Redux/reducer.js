const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };
    case "REMOVE_FAV":
      return { ...state, myFavorites: payload };
    case "FILTER":
      if (payload === "PH") {
        return { ...state };
      }
      let copy3 = state.allCharacters.filter((char) => char.gender === payload);
      return {
        ...state,
        myFavorites: copy3,
      };
    case "STATUS":
      if (payload === "PH") {
        return { ...state };
      }
      let copy4 = state.allCharacters.filter((char) => char.status === payload);
      return {
        ...state,
        myFavorites: copy4,
      };
    case "SPECIES":
      if (payload === "PH") {
        return { ...state };
      }
      let copy6 = state.allCharacters.filter(
        (char) => char.species === payload
      );
      return {
        ...state,
        myFavorites: copy6,
      };
    case "ORDER":
      let copy5 = state.allCharacters.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else if (payload === "D") {
          return b.id - a.id;
        }
        if (payload === "PH") {
          return { ...state };
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: copy5,
      };
    case "RESET":
      return {
        ...state,
        myFavorites: state.allCharacters,
      };
    default:
      return state;
  }
};

export default rootReducer;
