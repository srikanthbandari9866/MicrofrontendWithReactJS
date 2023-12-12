import React, {useState} from 'react'

export default (props) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const setEmail1 = props.setEmail
    const setPassword1 = props.setPassword
    function assignEmail(e){
            setEmail1(e)
    }
    function assignPassword(e){
            setPassword1(e)
    }

    return(
        <>
        <div className="inp">
        <label style={{ color: 'black', marginLeft: '4px' }}>Email</label>
                        <input type="text"
                            // value={email}
                            onChange={(e) => { assignEmail(e.target.value)}}
                            
                        />
        <label style={{ color: 'black', marginLeft: '4px' }}> Password</label>
                        <input
                            // value={password}
                            onChange={(e) => { assignPassword(e.target.value)}}
                            type="password"
                        />
        </div>
        </>
    )
}