import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import EyData from "./Components/EyData";

const App = () => (
  <div className="container-fluid">
    <EyData/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
