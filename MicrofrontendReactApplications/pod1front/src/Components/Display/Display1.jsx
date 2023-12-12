import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

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
import SearchBarName from '../Search/searchBarName';
export default () => {

  const [results, setResults] = useState([]);
  const [resultsN, setResultsN] = useState([]);
  const [resultsI, setResultsI] = useState([]);
  const [resultsD, setResultsD] = useState([]);
  const [resultsE, setResultsE] = useState([]);
  const [resultsM, setResultsM] = useState([]);
  const [resultsL, setResultsL] = useState([]);
  const [resultsG, setResultsG] = useState([]);
  const [content, setContent] = useState("")
  const [clear, setClear] = useState(false)


  let user = JSON.parse(localStorage.getItem('user-info'))
  const navigate = useNavigate()
  function logout() {
    localStorage.clear();
    navigate("/Login")

  }

  function clearResults() {
    if(resultsN != "" || resultsD != "" || resultsI != "" || resultsE != "" 
    || resultsM != "" || resultsL != "" || resultsG != ""){

      window.location.reload(true);
    }
    setClear(true)

  }

  return (
    <>
      <SideMenuBar />
      <div className="display-page">
        <div className="sidebar">
        </div>
        <div className="main-content">
          <Header />

          <div className="searchContent">

            <div className="navbar" style={{ marginTop: "60px" }} >
              <SearchBarName setResultsN={setResultsN} setContent={setContent} />
            </div>

            <div className="navbar" >
              <SearchBarId setResultsI={setResultsI} setContent={setContent} clear={clear} />
            </div>

            <div className="navbar" >
              <SearchBarDep setResultsD={setResultsD} setContent={setContent} clear={clear} />
            </div>

            <div className="navbar" >
              <SearchBarEmail setResultsE={setResultsE} setContent={setContent} clear={clear} />
            </div>

            <div className="navbar"  >
              <SearchBarMobile setResultsM={setResultsM} setContent={setContent} clear={clear} />
            </div>

            <div className="navbar" >
              <SearchBarLocation setResultsL={setResultsL} setContent={setContent} clear={clear} />
            </div>

            <div className="navbar" >
              <SearchBarGender setResultsG={setResultsG} setContent={setContent} clear={clear} />
            </div>
            <div className='clear-button'>
                <button onClick={clearResults}>clear results</button>
              </div>
          </div>
          <br />

          <div className="tableShow">
            <div className="navbar" >
              <SearchBar setResults={setResults} setContent={setContent} resultsN={resultsN} resultsI={resultsI} resultsD={resultsD} resultsE={resultsE}
                resultsM={resultsM} resultsL={resultsL} resultsG={resultsG} content={content} />
            </div>
          </div>
          {/* <div className="grid">
              <SearchResultsGrid results={results} content={content} />
            </div> */}
          <br />

          <FooterD />
        </div>
        <div className="profile">
          <div >
            {

              user && (user != null && user != "") ?
                <> <img className="profileImg" src={user.imagePath} alt="Profile" /></> : null
            }
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
