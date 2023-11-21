import React, { useState } from "react";
import validation from "../utils/validation.js";
import splash from "../Assets/splash.png";
import title from "../Assets/title.png";

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
    <div className="bg-blue-300 h-screen w-full flex flex-col justify-evenly">
      <div className="flex flex-row justify-center">
        <img
          src={title}
          alt="Title ima rick and morty"
          className="h-[150px] w-[300px] md:h-[200px] md:w-[600px]"
        />
      </div>

      <div className="flex flex-col md:flex-row  justify-center md:justify-evenly items-center">
        <img
          src={splash}
          alt="Rick and Morty splash art"
          className="hidden md:block h-[500px] w-[500px]"
        />
        <form className="border-2 border-slate-500 h-[500px] w-[325px] rounded-md bg-slate-400 shadow-xl flex flex-col justify-around">
          <h1 className="flex flex-row justify-center text-2xl">Log In</h1>
          <div className=" my-2 mx-1 flex flex-col ">
            <label>EMAIL: </label>
            <input
              type="email"
              value={userData.email}
              placeholder="email"
              name="email"
              onChange={handleChange}
              className="rounded p-1"
            />
            <p>{errors.email}</p>
          </div>

          <div className="my-2 mx-1 flex flex-col ">
            <label>PASSWORD: </label>
            <input
              type="password"
              value={userData.password}
              placeholder="password"
              name="password"
              onChange={handleChange}
              className="rounded p-1"
            />
            <p>{errors.password}</p>
          </div>

          <div className=" flex flex-row justify-center p-8">
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-2xl hover:bg-blue-500 hover:border-black hover:border-2 hover:scale-110 p-2 rounded-sm"
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
