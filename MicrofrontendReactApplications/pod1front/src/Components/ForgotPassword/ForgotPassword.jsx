import "./ForgotPassword.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Home from "../Home";

export default function ChangePassword() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState();
    const [bools, SetBools] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState("")
    const [formErrors, setFormErrors] = useState({});
    const [formErrors1, setFormErrors1] = useState({});
    const [users, setUsers] = useState({});
    let res = {};

    async function getData() {
        try {
            const errors = { email: "" };
            if (!email) {
                errors.email = " * Username is required";
            }

            setFormErrors(errors);
        } catch (error) { }

        if (email != "" && email != null) {
            let user = await axios
                .get(`http://localhost:8018/api/Users/email/${email}`)
                .then((response) => {
                    res = response.data;
                    setUserId(response.data.userId);
                    console.log(response.data.userId);
                    if (response.data.userId != undefined) {
                        SetBools(true);
                    }
                    else {
                        alert("Email does not exists");
                    }
                });


        }

    }
    function calls() {
        if (userId == null || userId == undefined) {
            alert("Invalid Email")
        }
    }
    function editData() {
        try {
            const errors1 = { password: "",confirmPassword:"" };
            if (!password) {
                errors1.password = " * Password is required";
            }
            else if(password != confirmPassword){
                errors1.confirmPassword = " * password mismatched"
            }

            setFormErrors1(errors1);
        } catch (error) { }
        if (password != "" && password != null && (password == confirmPassword)) {
            // alert("user Id : " + userId);
            const EditData = { userId, email, password }
            let res = axios.put(`http://localhost:8018/api/Users/${userId}`, EditData)
                .then(response => {
                    alert("Details Changed Login Again !")
                    localStorage.clear();
                    navigate("/login")
                })
        }

    }
    function Back() {
        navigate("/login");
    }

    return (
        <>
        {/* <Home/> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

            <Form className="reg">
                <div className="col-sm-6 offset-sm-3 Register">
                    <div className="h1tag">
                         <h1 >Reset Your Password</h1>
                    </div>
                    <div  style={{ padding: "50px", textAlign: "left" }}>
                        <label
                            htmlFor=""
                            style={{
                                fontSize: "20px",
                                paddingTop: "8px",
                                // color: "rgb(87, 99, 99)",            
                                color:"black",
                                fontWeight:"500"
                            }}
                        >
                            {" "}
                            <b>Email</b>{" "}
                        </label>
                        <p style={{ color: "red" }}>{formErrors.email}</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            className="form-control"
                            placeholder="Email"
                            style={{marginTop:"-15px"}}
                        />
                        {bools == false ? (
                            <>
                                <Button variant="primary " aria-disabled="true" onClick={getData} style={{ marginTop: "20px",marginLeft:"270px" }}>
                                    next
                                </Button>
                            </>
                        ) : null}
                        {bools == true ? (
                            <>
                                <label
                                    htmlFor=""
                                    style={{
                                        fontSize: "20px",
                                        paddingTop: "8px",
                                        // color: "rgb(87, 99, 99)",
                                        color:"black",
                                        marginTop:"10px",
                                        fontWeight:"500"
                                    }}
                                >
                                    {" "}
                                    <b>New Password</b>{" "}
                                </label>
                                <p style={{ color: "red" }}>{formErrors1.password}</p>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    className="form-control"
                                    placeholder="Password"
                                    style={{marginTop:"-15px"}}
                                />
                                <label
                                    htmlFor=""
                                    style={{
                                        fontSize: "20px",
                                        paddingTop: "8px",
                                        // color: "rgb(87, 99, 99)",
                                        color:"black",
                                        marginTop:"10px",
                                        fontWeight:"500"
                                    }}
                                >
                                    {" "}
                                    <b>Confirm Password</b>{" "}
                                </label>
                                <p style={{ color: "red" }}>{formErrors1.confirmPassword}</p>
                                 <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                      setConfirmPassword(e.target.value);
                                    }}
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    style={{marginTop:"-15px"}}
                                />
                                <br />
                                <Button variant="outline-success" onClick={editData} style={{marginLeft:"250px  " }}>
                                    Save
                                </Button>
                            </>
                        ) : null}
                        <div style={{ paddingTop: "10px", marginTop: "-50px  " }}>
                            <Button
                                variant="outline-primary"
                                onClick={Back}

                            >
                                Back
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
}

