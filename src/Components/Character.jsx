import React from "react";
import useFetch from "../Hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const urlTo = `https://rickandmortyapi.com/api/character/${id}`;
  const { results, isLoading, onFail } = useFetch(urlTo);

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

  return (
    <div>
      {(results !== undefined) & (results !== "") ? (
        <>
          <img
            src={results?.image}
            height={"100vh"}
            alt={`Representation of ${results?.name}`}
          />
          <h2>Name: {results?.name}</h2>
          <h2>Specie: {results?.species !== "" ? results?.species : "NaN"}</h2>
          <h2>Type: {results?.type !== "" ? results?.type : "NaN"}</h2>
          <h2>Gender: {results?.gender !== "" ? results?.gender : "NaN"}</h2>
          <h2>
            Origin: {results?.origin.name !== "" ? results?.origin.name : "NaN"}
          </h2>
          <h2>Status: {results?.status !== "" ? results?.status : "NaN"}</h2>
          {intId - 1 >= 1 ? (
            <>
              <Link to={`/Character/${intId - 1 > 1 ? intId - 1 : 1}`}>
                Previus Character
              </Link>
            </>
          ) : (
            ""
          )}
          <Link to={`/List/1`}>List</Link>
          {intId + 1 <= 826 ? (
            <>
              <Link to={`/Character/${intId + 1}`}>Next Character</Link>
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Character;
