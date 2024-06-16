import React from "react";
import useFetch from "../Hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import "./Character.css";
import Characters from "../Images/Characters.jpg";
import "./Character.css";

const Character = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const urlTo = `https://rickandmortyapi.com/api/character/${id}`;
  const { results, isLoading, onFail } = useFetch(urlTo);
  let color = "white";

  if (isLoading) {
    return (
      <>
        <div>
          <h1>Is Loading...</h1>
        </div>
      </>
    );
  }

  if (onFail) {
    return (
      <>
        <div>
          <h1>Ohh! Something happend...</h1>
          <Link to={`/List`}>List</Link>
        </div>
      </>
    );
  }

  if ((results !== undefined) & (results !== "")) {
    if (results?.status === "Alive") {
      color = "#bfde42";
    } else if (results?.status === "Dead") {
      color = "#E80000";
    }
  }

  return (
    <div className="characterPage">
      <img
        className="backgroundImagen"
        src={Characters}
        alt="Background Rick and Morty"
      />
      <div className="characterCard">
        {(results !== undefined) & (results !== "") ? (
          <>
            <img
              src={results?.image}
              height={"150vh"}
              alt={`Representation of ${results?.name}`}
              style={{ marginBottom: "5%", borderRadius: "20px" }}
            />
            <div className="characterText">
              <p>
                <span>Name:</span> {results?.name}
              </p>
              <p>
                <span>Specie:</span>{" "}
                {results?.species !== "" ? results?.species : "NaN"}
              </p>
              <p>
                <span>Type:</span>{" "}
                {results?.type !== "" ? results?.type : "NaN"}
              </p>
              <p>
                <span>Gender:</span>{" "}
                {results?.gender !== "" ? results?.gender : "NaN"}
              </p>
              <p>
                <span>Origin:</span>{" "}
                {results?.origin.name !== "" ? results?.origin.name : "NaN"}
              </p>
              <p style={{ color: color, fontSize: "4vh" }}>
                <span>Status:</span>{" "}
                {results?.status !== "" ? results?.status : "NaN"}
              </p>
            </div>
            <div className="navigationCharacters">
              {intId - 1 >= 1 ? (
                <>
                  <Link to={`/Character/${intId - 1 > 1 ? intId - 1 : 1}`}>
                    Previus Character
                  </Link>
                </>
              ) : (
                <div></div>
              )}
              <Link to={`/List/1`}>List</Link>
              {intId + 1 <= 826 ? (
                <>
                  <Link to={`/Character/${intId + 1}`}>Next Character</Link>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Character;
