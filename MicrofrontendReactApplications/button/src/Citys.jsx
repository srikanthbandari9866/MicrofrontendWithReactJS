import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default (props) => {
    const [citys, setCitys] = useState();
    const id = props.id

    useEffect(() => {
        async function callApi() {

            let res = await axios.get(`http://localhost:8018/api/Citys/State/${id}`).then(response => {
                setCitys(response.data)
            })
            
        }
        callApi()
    }, [citys])

    return (
        <>
            <p>City dropdown</p>
            <div class="custom-select" style={{ width: "200px" }}>
                <select>
                    <option key="0">Select City:</option>
                    {citys &&
                        (citys).map((l, index) => {
                            return (
                                <option key={l.cityId}>{l.cityName}</option>
                            )
                        })
                    }

                </select>
            </div>


            <br /><br />
        </>
    )
}