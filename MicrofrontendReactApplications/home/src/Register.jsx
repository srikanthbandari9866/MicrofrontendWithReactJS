// import { height } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Home from '../Home';
import "./Register.css"

export default () => {
  const [userName,setUserName] = useState("")
  const [employeeId,setEmployeeId] = useState("")
  const [location,setLocation] = useState("")
  const [gender,setGender] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [department,setDepartment] = useState("")
  const [email,setEmail] = useState("")
  const [document,setDocument] = useState()
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [formErrors, setFormErrors] = useState({});
  const imagePath = 'HexaLong.png'

  // const navigate = useNavigate();

  function buttonCheck(op){
    if(op===2){
      setGender('Male')
      console.log(gender)
    }
    if(op===1){
      setGender('Female')
    }
    if(op===3){
      setGender('Other')
    }
    
  }
  async function handleSubmit(e){
      try {
        const errors = { email: "", password: "", userName: "", phoneNumber: "", employeeId:"",location:"",gender:""
                          ,department:"" ,confirmPassword:""}
        if (!userName) {
            errors.userName = " * userName is required";
        }
        if (!employeeId) {
          errors.employeeId = " * employeee id is required";
        }
       if (!location) {
          errors.location = " * location is required";
          }
         if (!gender) {
            errors.gender = " * gender is required";
          }
        if (!phoneNumber) {
            errors.phoneNumber = " * phone number is required";
        }
         if (!department) {
          errors.department = " * department  is required";
        }
         if (!email) {
            errors.email = " * Username is required";
        }
        if (!password) {
            errors.password = " * Password is required";
        }
        if (password != confirmPassword) {
          errors.confirmPassword = " * password & confirm password mismatched";
      }


        setFormErrors(errors);

    } catch (error) {

    }
    if (email!= ""&& password != "", userName != ""&& phoneNumber != "" && employeeId !="" && location!="" && gender !=""
    && department != "" && (confirmPassword == password)){
        const userdata = {userName, employeeId, gender, phoneNumber, email, password, department, location,imagePath, document}
        // console.log(userdata)
        const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
        let result = await axios.post(`http://localhost:8118/api/Users`, userdata,config).then(response => {
          console.log(response.data)
          alert("Successfuly registered! Please Login to enter.")
          localStorage.clear()
          // navigate("/Login")
        })
    }
    e.preventDefault()
  }

  return(
    <>
    {/* <Home/> */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <section class="h-100 bg-dark">
  <div class="container_regiser py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4" style={{backgroundColor:"whitesmoke"}}>
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
            {/* <img src="HexaLogo.png"
                alt="Sample photo" class="img-fluid"
                // style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" 
                style={{borderTopLeftRadius:".25rem", borderBottomLeftRadius:".25rem", marginLeft:"20%" }} /> */}
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" class="img-fluid"
                // style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" 
                style={{borderTopLeftRadius:".25rem", borderBottomLeftRadius:".25rem"}} />
                
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Employee registration</h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                      <label class="form-label" for="form3Example1m">Name</label>
                      <p style={{ color: "red" }}>{formErrors.userName}</p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" value={employeeId} onChange={(e) => { setEmployeeId(e.target.value) }} />
                      <label class="form-label" for="form3Example1n">Employee ID</label>
                      <p style={{ color: "red" }}>{formErrors.employeeId}</p>
                    </div>
                  </div>
                </div>


                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" value={location} onChange={(e) => { setLocation(e.target.value) }}/>
                  <label class="form-label" for="form3Example8">Location</label>
                  <p style={{ color: "red" }}>{formErrors.location}</p>
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>
                  

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" onClick={() => buttonCheck(1)} />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" onClick={() => buttonCheck(2)} />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" onClick={() => buttonCheck(3)}/>
                    <label class="form-check-label" for="otherGender">Other</label><br />
                    <p style={{ color: "red" }}>{formErrors.gender}</p>
                  </div>

                </div>

                {/* <div class="row">
                  <div class="col-md-6 mb-4">

                    <select class="select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  
                </div> */}

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example90" class="form-control form-control-lg" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                  <label class="form-label" for="form3Example90">Phone Number</label>
                  <p style={{ color: "red" }}>{formErrors.phoneNumber}</p>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg" value={department} onChange={(e) => { setDepartment(e.target.value) }} />
                  <label class="form-label" for="form3Example99">Department</label>
                  <p style={{ color: "red" }}>{formErrors.department}</p>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example97" class="form-control form-control-lg" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                  <label class="form-label" for="form3Example97">Email ID</label>
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                </div>

                <div class="form-outline mb-4">
                  <input type="file" id="form3Example97" class="form-control form-control-lg" files={document} onChange={(e) => { setDocument(e.target.files[0]) }}/>
                  <label class="form-label" for="form3Example97">Upload File</label>
                  {/* <p style={{ color: "red" }}>{formErrors.email}</p> */}
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example9" class="form-control form-control-lg" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                  <label class="form-label" for="form3Example9">Password</label>
                  <p style={{ color: "red" }}>{formErrors.password}</p>
                </div>
                <div class="form-outline mb-4"> 
                  <input type="password" id="form3Example9" class="form-control form-control-lg" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                  <label class="form-label" for="form3Example9">Confirm password</label>
                  <p style={{ color: "red" }}>{formErrors.confirmPassword}</p>
                </div>

                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-primary btn-lg" style={{marginRight:"15px"}} onClick={() => navigate("/Login")}> Back to login</button>
                  <button type="button" class="btn btn-warning btn-lg ms-2" onClick={handleSubmit} >Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
    
  )
}
