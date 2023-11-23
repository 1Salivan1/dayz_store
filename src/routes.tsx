import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import SellersTop from "./pages/SellersTop";

function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />;
      <Route path="/sellers" element={<SellersTop />} />;
    </Routes>
  );
}

export default Routs;
