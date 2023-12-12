import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export default (props) => {
  let userId = null;
  const email = props.email
  const password = props.password
 async  function checkUser(){
    if (email != "" && password != "") {
      let result = await axios.get(`http://localhost:8018/api/Users/logins/${email}/${password}`)
          .then(response => {
              userId = response.data.userId;
              let userName = response.data.userName;
              let email = response.data.email;
              let phoneNumber = response.data.phoneNumber;
              // res = { userId, userName, email, phoneNumber };
              console.log("userData is : " + userId);
              if (userId == null || userId == undefined) {
                  alert("Invalid Login  : " + userId)

              }
              else {
                  // localStorage.setItem("user-info", JSON.stringify(res))
                  alert("user name is  :  " +  response.data.userName)
              }
          })
  }
  }
  return(
    <>
    <div className="buttons">
        <Button onClick={checkUser} >Button</Button>
        
    </div>
    </>
  )
}
