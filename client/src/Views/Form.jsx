import React, { useState } from "react";
import validation from "../utils/validation.js";
import splash from "../Assets/splash.png";
import title from "../Assets/title.png";
import { motion } from "framer-motion";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className="bg-blue-900 h-screen w-full flex flex-col justify-evenly">
      <div className="flex flex-row justify-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
          src={title}
          alt="Title ima rick and morty"
          className="h-[150px] w-[300px] md:h-[200px] md:w-[600px]"
        />
      </div>

      <div className="flex flex-col md:flex-row  justify-center md:justify-evenly items-center">
        <motion.img
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -300, opacity: 0 }}
          transition={{ duration: 2, delay: 1 }}
          src={splash}
          alt="Rick and Morty splash art"
          className="hidden md:block h-[500px] w-[500px]"
        />
        <form className="border-2 border-slate-700 h-[500px] w-[350px] rounded-md bg-slate-600 shadow-xl flex flex-col justify-evenly">
          <h1 className="flex flex-row justify-center text-4xl font-bold text-emerald-500">
            Log In
          </h1>
          <div className="my-2 mx-3 flex flex-col text-gray-100">
            <label>EMAIL: </label>
            <input
              type="email"
              value={userData.email}
              placeholder="email"
              name="email"
              onChange={handleChange}
              className="rounded p-1 border-2 border-slate-700 text-gray-700"
            />
            <p className="text-red-600 font-bold">{errors.email}</p>
          </div>

          <div className="my-2 mx-3 flex flex-col text-gray-100">
            <label>PASSWORD: </label>
            <input
              type="password"
              value={userData.password}
              placeholder="password"
              name="password"
              onChange={handleChange}
              className="rounded p-1  border-2 border-slate-700 text-gray-700"
            />
            <p className="text-red-600 font-bold">{errors.password}</p>
          </div>

          <div className=" flex flex-row justify-center p-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-2xl text-gray-200 bg-green-500 border-2 border-green-600 p-2 hover:scale-110 hover:bg-green-600 hover:border-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
