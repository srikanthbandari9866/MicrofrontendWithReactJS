import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./index.css";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Display from "./Components/Display/Display";
import Protected from "./Components/Protected";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Display1 from "./Components/Display/Display1";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container">
    
    <Router>
      <Routes>
        
        <Route exact path="/Home" element={<Home/>} />

          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword/>} />
        {/* <Route exact path="/Display" element={<Display/>} /> */}
         <Route exact path="/Display" element={< Protected Cmp = {Display}/>} />
         <Route exact path="/Display1" element={< Protected Cmp = {Display1}/>} />
      </Routes>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));