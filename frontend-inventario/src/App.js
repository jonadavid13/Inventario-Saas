import React from "react";
import { HeaderMain } from "./components/HeaderMain";
import "./assets/styles/index.scss";

function App() {
  return (
    <>
      <div className="App">
        <HeaderMain/>
        <div className="d-flex">
          <button name="action1" id="btn1" className="btn btn-primary">Pedir datos</button>
          <button name="action1" id="btn1" className="btn btn-secondary">Pedir datos</button>
          <button name="action1" id="btn1" className="btn btn-success">Pedir datos</button>
          <button name="action1" id="btn1" className="btn btn-warning">Pedir datos</button>
          <button name="action1" id="btn1" className="btn btn-danger">Pedir datos</button>
          <button name="action1" id="btn1" className="btn btn-dark">Pedir datos</button>
        </div>
      </div>
    </>
  );
}

export default App;
