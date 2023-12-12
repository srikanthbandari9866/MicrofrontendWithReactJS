import React, {useState} from 'react'

export default (props) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const setEmail = props.setEmail
    const setPassword = props.setPassword
    return(
        <>
        <div className="inp">
        <label style={{ color: 'black', marginLeft: '4px' }}>Email</label>
                        <input type="text"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value); validateEmail()}}
                            
                        />
        <label style={{ color: 'black', marginLeft: '4px' }}> Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
        </div>
        </>
    )
}