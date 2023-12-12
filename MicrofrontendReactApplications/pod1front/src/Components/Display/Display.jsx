import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Navbar, Nav, NavDropdown,Dropdown } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import "./Display.css"
// import Home from './Home';
import SearchBar from '../Search/searchBar';
import SearchResultsGrid from '../Search/SearchResultsGrid';
import SideMenuBar from '../SideMenuBar/SideMenuBar';
import SearchBarId from '../Search/searchBarId';
import SearchBarDep from '../Search/searchBarDep';
import SearchBarEmail from '../Search/searchBarEmail';
import SearchBarMobile from '../Search/searchBarMobile';
import SearchBarGender from '../Search/searchBarGender';
import SearchBarLocation from '../Search/searchBarLocation';
import Header from '../Header&Footer/Header';
import FooterD from '../Header&Footer/FooterD';
import EyData from '../EyData/EyData';
import EyDataFIlter from '../EyData/EyDataFIlter';

export default () => {

  // const [results, setResults] = useState([]);
  // const [resultsI, setResultsI] = useState([]);
  // const [resultsD, setResultsD] = useState([]);
  // const [resultsE, setResultsE] = useState([]);
  // const [resultsM, setResultsM] = useState([]);
  // const [resultsL, setResultsL] = useState([]);
  // const [resultsG, setResultsG] = useState([]);
  // const [content, setContent] = useState("")
  // const [contentI, setContentI] = useState("")
  // const [contentD, setContentD] = useState("")
  // const [contentE, setContentE] = useState("")
  // const [contentM, setContentM] = useState("")
  // const [contentL, setContentL] = useState("")
  // const [contentG, setContentG] = useState("")
  

  let user = JSON.parse(localStorage.getItem('user-info'))
  const navigate = useNavigate()
  function logout() {
    localStorage.clear();
    navigate("/Login")

  }
  return (
    <>
      <SideMenuBar />
      <div className="display-page">
        <div className="sidebar">
        </div>
        <div className="main-content">
          <Header/>
          {/* <div className="eydata">
                <EyData />
          </div> */}
          <div className="eydata">
                <EyDataFIlter />
          </div>
          {/* <div className="navbar" style={{marginTop:"60px"}}>
            <SearchBar setResults={setResults} setContent={setContent} />
          </div>
          
          <div className="grid">
            <SearchResultsGrid results={results} content={content} />
          </div> */}
          <br />
          {/* <div className="navbar">
            <SearchBarId setResultsI={setResultsI} setContentI={setContentI} />

          </div>
          <div className="grid">
            <SearchResultsGrid results={resultsI} content={contentI} />
          </div>
          <br />
          <div className="navbar">
            <SearchBarDep setResultsD={setResultsD} setContentD={setContentD} />

          </div>
          <div className="grid">
            <SearchResultsGrid results={resultsD} content={contentD} />
          </div>
          <br />
          <div className="navbar">
            <SearchBarEmail setResultsE={setResultsE} setContentE={setContentE} />

          </div>
          <div className="grid">
            <SearchResultsGrid results={resultsE} content={contentE} />
          </div>
          <br />
          <div className="navbar">
            <SearchBarMobile setResultsM={setResultsM} setContentM={setContentM} />

          </div>
          <div className="grid">
            <SearchResultsGrid results={resultsM} content={contentM} />
          </div>
          <br />
          <div className="navbar">
            <SearchBarLocation setResultsL={setResultsL} setContentL={setContentL} />

          </div>
          <div className="grid">
            <SearchResultsGrid results={resultsL} content={contentL} />
          </div>
          <br />
          <div className="navbar">
            <SearchBarGender setResultsG={setResultsG} setContentG={setContentG} />

          </div>
          <div className="grid">
            <SearchResultsGrid results={resultsG} content={contentG} />
          </div>
           */}
          <FooterD />
        </div>
        <div className="profile">
          <div >
            <img className="profileImg" src={user.imagePath} alt="Profile" />
          </div>

          <div class="dropdown">
            <div className="Profile_dropdown">
            {
              user && (user != null && user != "") ? 
              <><h2 >{user.userName}  </h2></> : null
            }
            <img className='profileLogo' src="user.png" alt="" />
            </div>
            
            <div class="dropdown-content">
              <Button onClick={logout} >Logout</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
