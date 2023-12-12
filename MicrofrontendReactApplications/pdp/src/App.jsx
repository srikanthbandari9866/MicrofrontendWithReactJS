import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Display from "./Components/Display";
// import Register from "./Components/Register"
import ForgotPassword from "pod1front/ForgotPassword";
import "./index.css";
import Login from "pod1front/Login";
import Protected from "pod1front/Protected";
import Register from "pod1front/Register";
import Display from "pod1front/Display";
import Display1 from "pod1front/Display1";
// import HomePro from "./HomePro";


const App = () => (
  <div className="container">
    {/* <HomePro/> */}
   <Router>
      <Routes>
        
        {/* <Route exact path="/Register" element={<Register/>} /> */}
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
