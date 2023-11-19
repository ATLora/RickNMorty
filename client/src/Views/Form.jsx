import React, { useState } from "react";
import validation from "../utils/validation.js";

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
    <div>
      <form>
        <label>EMAIL: </label>
        <input
          type="email"
          value={userData.email}
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <label>PASSWORD: </label>
        <input
          type="password"
          value={userData.password}
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <button
          type="submit"
          onClick={handleSubmit}
          /* disabled={Object.values(errors).some((error) => error)} */
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
