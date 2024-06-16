import React from "react";
import { Link } from "react-router-dom";
import welcomeImagen from "../Images/Welcome.png";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={welcomeImagen} alt="Welcome Imagen" />
      <h1>Welcome!</h1>
      <Link to={"/List/1"}>List of Characters</Link>
    </div>
  );
};

export default Welcome;
