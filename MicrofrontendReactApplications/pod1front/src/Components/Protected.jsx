import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default (props) => {
  let Cmp = props.Cmp
  const navigate = useNavigate();

  useEffect(() => {
    if(!(localStorage.getItem('user-info'))){
        navigate('/Login')
    }
  },[])

  return(
    <div>
        <Cmp/>
    </div>

  )

}