import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch.js";
import { Link, useParams } from "react-router-dom";
import "./List.css";
import Banner from "../Images/Banner.jpg";
import Footer from "../Images/Footer.jpg";

const List = () => {
  const { page } = useParams();
  const intPage = parseInt(page);
  const urlTo = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const { results, isLoading, onFail } = useFetch(urlTo);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(results.results);
  }, [results]);

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
    <div className="listPage">
      <img src={Banner} width={"100%"} alt="Banner Rick and Morty" />
      <h1 className="charactersH1">Characters</h1>
      {data !== undefined ? (
        <>
          <ul className="listNames">
            {data.map((character) => {
              return (
                <li key={character?.id}>
                  <Link to={`/Character/${character?.id}`}>
                    {`${character?.id}. ${character?.name}`}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="navigationButtons">
            {intPage - 1 >= 1 ? (
              <>
                <Link to={`/List/${intPage - 1 > 1 ? intPage - 1 : 1}`}>
                  Previus Page
                </Link>
              </>
            ) : (
              <div></div>
            )}
            <Link to={`/`}>Home</Link>
            {intPage + 1 <= 42 ? (
              <>
                <Link to={`/List/${intPage + 1}`}>Next Page</Link>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
      <img src={Footer} width={"100%"} alt="Footer Rick and Morty" />
    </div>
  );
};

export default List;
