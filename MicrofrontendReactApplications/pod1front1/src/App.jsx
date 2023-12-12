import React from "react";
import ReactDOM from "react-dom";
import Ey from "./Components/Ey";
import LOGG from "./Components/LOGG";
import States from "./Components/States";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// // import Display from "./Components/Display";
// import Register from "./Components/Register"
// import ForgotPassword from "pod1front/ForgotPassword";
// import "./index.css";
// import Login from "pod1front/Login";
// import Protected from "pod1front/Protected";
// // import Register from "pod1front/Register";
// import Display from "pod1front/Display";
const App = () => (
 <>
 <h1>pod1front1</h1>
 <States />
 
   <Ey/>

 </>
);
ReactDOM.render(<App />, document.getElementById("app"));


