import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6 } from "./pages";

function Router() {
  return (
    <Routes>
      <Route path="/ex1" element={<Ex1 />} />
      <Route path="/ex2" element={<Ex2 />} />
      <Route path="/ex3" element={<Ex3 />} />
      <Route path="/ex4" element={<Ex4 />} />
      <Route path="/ex5" element={<Ex5 />} />
      <Route path="/ex6" element={<Ex6 />} />
    </Routes>
  );
}

export default Router;
