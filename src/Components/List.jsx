import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch.js";
import { Link, useParams } from "react-router-dom";

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
    <div>
      {data !== undefined ? (
        <>
          <h1>Characters</h1>
          <ul>
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
          {intPage - 1 >= 1 ? (
            <>
              <Link to={`/List/${intPage - 1 > 1 ? intPage - 1 : 1}`}>
                Previus Page
              </Link>
            </>
          ) : (
            ""
          )}
          <Link to={`/`}>Home</Link>
          {intPage + 1 <= 42 ? (
            <>
              <Link to={`/List/${intPage + 1}`}>Next Page</Link>
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

export default List;
