import { Route, BrowserRouter, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import List from "./List";
import Character from "./Character";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/List/:page" element={<List />} />
        <Route path="/Character/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
