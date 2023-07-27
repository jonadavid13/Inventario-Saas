import React from "react";
import { HeaderMain } from "./components/HeaderMain";
import "./assets/styles/index.scss";
import $ from "jquery";

const getData = () => {
  $.ajax({
    type: "POST",
    url: "https://petrifying-grant.000webhostapp.com/select_pozos.php",
    dataType: "json",
    beforeSend: function () {
      console.log("Esperando los datos del BACK");
    },
    success: function (resp) {
      console.log(resp);
    },
    fail: function (jqXHR, textStatus, errorThown) {
      console.log(textStatus, errorThown);
    },
    error: function (jqXHR, textStatus, errorThown) {
      console.log(textStatus, errorThown);
    },
  });
}

function App() {
  return (
    <>
      <div className="App">
        <HeaderMain/>
        <div className="d-flex">
          <button name="boton1" id="btn1" className="btn btn-primary" onClick={getData()}>Test</button>
        </div>
      </div>
    </>
  );
}

export default App;
