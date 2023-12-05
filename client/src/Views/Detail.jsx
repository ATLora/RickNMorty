import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

//* Show more information about each character
export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  // Find a way to display the episodes
  // let episode = character.episode;
  // console.log(episode.length);

  return (
    <div className="pt-8 w-full h-screen bg-blue-900 flex flex-row justify-center">
      <div className="flex flex-col justify-even items-center md:border-2 md:border-blue-950 md:rounded-md md:shadow-lg md:w-[1200px] md:h-[800px]">
        <h1 className="my-20 text-green-500 font-bold text-5xl">
          {character.name}
        </h1>
        <div className=" flex md:flex-row flex-col md:justify-center items-center">
          <div className="md:mr-[150px]">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5,
              }}
              src={character.image}
              alt={character.name}
              className="h-[400px] w-[380px] rounded-lg shadow-xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="h-[400px] w-[300px] text-2xl text-gray-300 flex flex-col justify-around"
          >
            <h2>
              Species:{" "}
              <span className="text-green-300">{character.species}</span>
            </h2>
            {character.type !== "" && (
              <h2>
                Type: <span className="text-green-300">{character.type}</span>
              </h2>
            )}
            <h2>
              Gender: <span className="text-green-300">{character.gender}</span>
            </h2>
            <h2>
              Origin:{" "}
              <span className="text-green-300">{character.origin?.name}</span>
            </h2>
            <h2>
              Status: <span className="text-green-300">{character.status}</span>
            </h2>
            <h2>
              location:{" "}
              <span className="text-green-300">{character.location?.name}</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
