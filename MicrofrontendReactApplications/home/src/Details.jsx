import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default () => {

    const [userData,setUserData] = useState([]);
    const email = "silpa@hexaware.com"
    const [img, setImg] = useState();

// useEffect(() => {

// },[userData])

function handleSubmit(){
    const res = axios.get(`http://localhost:8118/api/users/email/${email}`)
    .then(response => {
        // setUserData(response.data)
        // console.log(response.data)
        alert("Success  " + response.data.email)
    })
    const imageBlob =  res.imagePath.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
    console.log(img)
// setUserData(res)
}


  return(
    <>
    <h4> sds : {img}</h4>
    <img src={img} alt="img" />
    
    <button onClick={handleSubmit}> Click</button>
    </>
  )
}
