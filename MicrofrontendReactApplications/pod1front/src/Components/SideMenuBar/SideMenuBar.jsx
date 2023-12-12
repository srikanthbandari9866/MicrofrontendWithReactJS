import React , {useState}from 'react'
import { Link } from 'react-router-dom';
import "./SideMenuBar.css"
export default () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };
    return (<>
        <div>
            {/* Button to toggle the side navigation */}
            <button className="collapse-btn" onClick={toggleSideNav}>
                &#9776;
            </button>

            {/* Side Navigation Menu */}
            <div
                className={`sidenav ${isSideNavOpen ? '' : 'collapsed'}`}
            >
                {/* &#10097; */}
                <Link to={"/Display1"} >&#10148; &nbsp;Home</Link>
                <Link to={"/Display"} >&#10148; &nbsp;EyData</Link>
                <a href="https://stationh.hexaware.com/" target="_blank">&#10148; &nbsp;StationH</a>
                <a href="https://tnb.hexaware.com/rmgportal" target="_blank" >&#10148; &nbsp;Tmg Portal</a>
            </div>

           
        </div>
    </>)
}