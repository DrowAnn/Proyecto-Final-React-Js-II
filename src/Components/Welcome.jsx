import React from "react";
import useFetch from "../Hooks/useFetch.js";

const Welcome = () => {
  const data = useFetch();
  console.log(data);

  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
};

export default Welcome;
