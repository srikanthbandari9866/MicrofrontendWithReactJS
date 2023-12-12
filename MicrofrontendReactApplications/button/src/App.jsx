import React from "react";
import ReactDOM from "react-dom";
import Citys from "./Citys";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: button</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>

    <hr />
    <Citys/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
