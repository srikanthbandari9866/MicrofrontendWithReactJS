import React, {useState,useEffect} from 'react'
import axios from 'axios'

export default (props) => {
    const [states, setStates] = useState();
    const [val,setVal] = useState();
    // const [val,setVal] = useState({id:0,state:""});
    const setId = props.setId;
    useEffect(() => {
        async function callApi() {
            let res = await axios.get(`http://localhost:8018/api/States`)
            setStates(res.data);
        }
        callApi()
    }, [states])

    function OnSelection(id){
        setId(id)
    }
    function ChangeId(e){
        setVal(e.target.value)
        setId(e.target.value)
        // console.log(e.target.value)
        // https://stackoverflow.com/questions/73772229/react-select-option-with-multiple-object-values
    }

    return (
        <>
            <p>  State dropdown</p>
            <div class="custom-select" style={{ width: "200px" }}>
                <select value={val} onChange={ChangeId }  >
                <option value="0">Select State:</option>
                    {states &&
                        (states).map((l, index) => {
                            return (
                                <option value={l.stateId} >{l.stateName}</option>
                            )
                        })
                    }
                    
                </select>
                
            </div>
        </>
    )
}
