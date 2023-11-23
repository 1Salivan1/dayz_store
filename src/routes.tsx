import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";

function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />;
    </Routes>
  );
}

export default Routs;
