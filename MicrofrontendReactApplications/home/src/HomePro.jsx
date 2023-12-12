import React, {useState} from 'react'
import LOGG from 'pod1front1/LOGG';
import States from 'pod1front1/States';
import Buttons from 'button/Buttons';
import Citys from 'button/Citys';
export default (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id,setId] = useState(0)
  return(
    <>
        <LOGG setEmail={setEmail} setPassword={setPassword} />
        <Buttons email = {email} password={password} />
        <p> email : {email} </p>
        <p> password : {password} </p>

        <hr />
        <States setId={setId} />
        {/* <p>{id}</p>  */}
        <Citys id = {id} />
        <hr />
        <br />
        
    </>
  )
}
