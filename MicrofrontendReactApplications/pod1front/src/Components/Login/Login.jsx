import React, { useState } from "react";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
// import { Button } from "react-bootstrap/lib/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import Home from "../Home";
export default () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [bool,setBool] = useState(false);
    const [bool1,setBool1] = useState(false);

    let res = {};
    // let user = JSON.parse(localStorage.getItem('user-info'));
    let userId = null;
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)/g;

    const validateEmail = (e) => {

        if (email && email.match(isValidEmail)) {
            setBool(false);
            // setEmail(e.target.value)
        } else {
            setBool(true);
        }
    }

    const handleSubmit = async (e) => {
        
        try {
            const errors = { email: "", password: "" }
            // const validemail = " /\S+@\S+\.\S+/"
            if (!email) {
                // errors.email = " * email is required";
                setBool1(true)
            }
            else{
                setBool1(false)
            }
            // if (email && email.match(isValidEmail)) {
            //     setBool(false);
            //     // setEmail(e.target.value)
            // } else {
            //     setBool(true);
            // }
            if (!password) {
                errors.password = " * Password is required";
            }

            setFormErrors(errors);
        } catch (error) {

        }
        if (email != "" && password != "" && bool == false) {
            let result = await axios.get(`http://localhost:8018/api/Users/logins/${email}/${password}`)
                .then(response => {
                    userId = response.data.userId;
                    let userName = response.data.userName;
                    let email = response.data.email;
                    let phoneNumber = response.data.phoneNumber;
                    let imagePath = response.data.imagePath;
                    res = { userId, userName, email, phoneNumber,imagePath };
                    console.log("userData is : " + userId);
                    if (userId == null || userId == undefined) {
                        alert("Invalid Login  : " + userId)

                    }
                    else {
                        localStorage.setItem("user-info", JSON.stringify(res))
                        // window.alert("Logged!")
                        navigate("/Display1")
                    }
                })
        }

        // if (res.userId != null) {
        //     localStorage.setItem("user-info", JSON.stringify(res))
        // }
        // alert("Button clicked")
        // e.preventDefault();
        // if(email!="" && password!="" ){
        //   navigate("/display")
        // }
    };
    return (
        // <div className="container">
        //     <div className="login">
        //         Login page
        //     </div>
        // </div>



        <>
            {/* <Home/> */}
            <div className="box">
                <span className="borderline"></span>
                <Form >
                    <h1>  Login</h1>
                    <div className="inputBox">
                        <label style={{ color: 'black', marginLeft: '4px' }}>Email</label>
                        <input type="text"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value); validateEmail()}}
                            
                        />
                        {/* <p style={{ color: "red", marginTop: "-15px", marginBottom: "20px" }}>{formErrors.email}</p> */}
                        {
                        bool1 &&  bool1 == true && email == "" ?
                       <>                        <p style={{ color: "red", marginTop: "-15px", marginBottom: "20px" }}> * email is required</p>
                       </>    
                       :
                       null
                    }
                        {
                        bool &&  bool == true ?
                       <>                        <p style={{ color: "red", marginTop: "-15px", marginBottom: "20px" }}> * Invalid email</p>
                       </>    
                       :
                       null
                    }
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <label style={{ color: 'black', marginLeft: '4px' }}> Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                        <p style={{ color: "red", marginTop: "-15px" }}>{formErrors.password}</p>
                        <i></i>
                    </div>
                    <div className="links">
                        <Link to="/register">Register here</Link>
                        <Link to="/ForgotPassword">Forgot Password?</Link>
                    </div>
                    {/* <input className="login-button" onSubmit={handleSubmit} type="submit" value='Login'/> */}
                    <Button className="login-button" onClick={() => {handleSubmit()}}>Login</Button>
                </Form>
            </div>
        </>
    )
}

// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// // import './Style.css';
// import Home from './Home';
// import axios from 'axios';
// // import Footer from './Footer';

// export default function Login() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     let res = {};
//     // let user = JSON.parse(localStorage.getItem('user-info'));
//     // const[userData,setUserData] = useState("");
//     let userId = null;
//     const [formErrors, setFormErrors] = useState({});

//     // useEffect(() => {
//     //     // if (user.userId != null ) {
//     //     if (localStorage.getItem('user-info')) {
//     //         navigate("/categories")
//     //     }
//     // }, [])
//     async function handleSubmit() {
//         try {
//             const errors = { email: "", password: "" }
//             if (!email) {
//                 errors.email = " * Username is required";
//             }
//             else if (!password) {
//                 errors.password = " * Password is required";
//             }

//             setFormErrors(errors);

//         } catch (error) {

//         }
//     //     let result = await axios.get(`https://localhost:44307/api/Users/login/${email}/${password}`)
//     //         .then(response => {
//     //             userId = response.data.userId;
//     //             let userName = response.data.userName;
//     //             let email = response.data.email;
//     //             let phoneNumber = response.data.phoneNumber;
//     //             res = { userId, userName, email, phoneNumber };
//     //             alert(userId);
//     //             console.log("userData is : " + userId);
//     //             if (userId == null || userId == undefined) {
//     //                 alert("Invalid Login")
//     //             }
//     //             else if (userId == 1) {
//     //                 navigate("/categories")
//     //             }
//     //             else {
//     //                 navigate("/categories")
//     //             }
//     //         })
//     //     if (res.userId != null) {
//     //         localStorage.setItem("user-info", JSON.stringify(res))
//     //     }
//      }

//     return (
//         <>
//             <Home />
//             <div className='col-sm-6 offset-sm-3 Login' >
//                 <h1>Login Page</h1>
//                 <div style={{ padding: "50px" }}>
//                     <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className='form-control' placeholder='UserName/Email' />
//                     <p style={{ color: "brown" }}>{formErrors.email}</p><br />
//                     <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className='form-control' placeholder='Password' />
//                     <p style={{ color: "brown" }}>{formErrors.password}</p><br />
//                     <div style={{ paddingTop: "10px", marginRight: "50px" }}><button onClick={handleSubmit}>Login</button></div>
//                     <div style={{ paddingLeft: "0px", marginTop: "20px", marginRight: "50px", color: 'aqua' }}><Link to="/changePassword" style={{ color: 'aqua' }}> forget password </Link></div>
//                 </div>
//             </div>
//             {/* <Footer /> */}
//         </>
//     )
// }