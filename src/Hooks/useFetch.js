import { useEffect, useState } from "react";

const useFetch = (urlTo) => {
  const [data, setData] = useState({
    results: {},
    isLoading: true,
    onFail: false,
  });

  async function getFetch(urlTo) {
    try {
      await fetch(urlTo)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error) {
            setData({ ...data, isLoading: false, onFail: true }); //Se agrago esta linea porque la API no devuelve un error 404 sino un json con el atributo {error: "Character not found"}
          } else {
            setData({
              ...data,
              results: responseJson,
              isLoading: false,
            });
          }
        });
    } catch (error) {
      console.log(error);
      setData({ ...data, isLoading: false, onFail: true });
    }
  }

  useEffect(() => {
    getFetch(urlTo);
  }, [urlTo]);

  return data;
};

export default useFetch;
