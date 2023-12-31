import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routs from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routs />
      </BrowserRouter>
    </div>
  );
}

export default App;
