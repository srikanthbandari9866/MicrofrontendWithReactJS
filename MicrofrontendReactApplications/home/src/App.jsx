import React from "react";
import ReactDOM from "react-dom";
import Details from "./details";
import HomePro from "./HomePro";

import "./index.css";
import MenuBar from "./MenuBar";
import Register from "./Register";



const App = () => (
  <div className="container">
   {/* <MenuBar/> */}
   <HomePro/>
   {/* <Register/>
   <Details/> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
