import { useEffect, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  async function getFetch() {
    await fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => {
        response.json();
      })
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getFetch();
  }, []);

  if (isLoading) {
    return console.log("Is Loading...");
  }

  return data;
};

export default useFetch;
