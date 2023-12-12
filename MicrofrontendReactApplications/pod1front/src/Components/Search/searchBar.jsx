import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./searchBar.css"
import "./SearchResultsGrid.css"

export default (props) => {
    const setResults = props.setResults
    // const setContent = props.setContent
    const resultsN = props.resultsN
    const resultsI = props.resultsI
    const resultsD = props.resultsD
    const resultsE = props.resultsE
    const resultsM = props.resultsM
    const resultsL = props.resultsL
    const resultsG = props.resultsG
    const content = props.content
    const [input, setInput] = useState([]);
    const [data, setData] = useState([])


    useEffect(() => {
        // fetchData(resultsN,resultsI,resultsD,resultsE,resultsM,resultsL,resultsG)
        fetchData1();

        // let res = filteredData;
        // setResults(res)

    }, [])
    const fetchData1 = async () => {
        console.log("this is " + resultsN)
        //    if(resultsN != ""){
        try {
            const response = await axios.get(`http://localhost:8018/api/Users`)
            // .then(res => {
            //     const filteredData = res.filter((user) => {
            //         const matchSearch1 = user.userName.toLowerCase().includes(resultsN);
            //         const matchSearch3 = user.department.toLowerCase().includes(resultsD);
            //         const matchSearch4 = user.email.toLowerCase().includes(resultsE);
            //         const matchSearch5 = user.location.toLowerCase().includes(resultsL);
            //         const matchSearch6 = user.gender.toLowerCase().includes(resultsG) || user.gender && user.gender.includes(resultsG);
            //         const matchSearch2 = user.employeeId.includes(resultsI);
            //         const matchSearch7 = user.phoneNumber.includes(resultsM);

            //         return matchSearch1 && matchSearch2 && matchSearch3 && matchSearch4 && matchSearch5 && matchSearch6 && matchSearch7;
            //     });
            // });
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        //    }
    }
    //  if(resultsN == ""){
    const filteredData = data.filter((user) => {
        const matchSearch1 = user.userName.toLowerCase().includes(resultsN) || user.userName && user.userName.toUpperCase().includes(resultsN) || user.userName && user.userName.includes(resultsN);
        const matchSearch3 = user.department.toLowerCase().includes(resultsD) || user.department && user.department.toUpperCase().includes(resultsD) || user.department && user.department.includes(resultsD);
        const matchSearch4 = user.email.toLowerCase().includes(resultsE);
        const matchSearch5 = user.location.toLowerCase().includes(resultsL) || user.location && user.location.toUpperCase().includes(resultsL) || user.location && user.location.includes(resultsL);
        const matchSearch6 = user.gender.toLowerCase().includes(resultsG) || user.gender && user.gender.includes(resultsG);
        const matchSearch2 = user.employeeId.includes(resultsI);
        const matchSearch7 = user.phoneNumber.includes(resultsM);

        return matchSearch1 && matchSearch2 && matchSearch3 && matchSearch4 && matchSearch5 && matchSearch6 && matchSearch7;
    });
    let length = filteredData.length;
    // setInput(filteredData)
    //  }


    // const fetchData = () => {
    //     console.log(resultsN)
    //     fetch(`http://localhost:8018/api/Users`)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         const results = json.filter((user) => {
    //             // return resultsN && user && (user.userName && user.userName.toLowerCase().includes(resultsN) || user.userName && user.userName.includes(resultsN))
    //             // return value && user && (user.userName && user.userName.toLowerCase().includes(value) || user.userName && user.userName.includes(value)
    //             //     || user.department && user.department.toLowerCase().includes(value) || user.department && user.department.includes(value)
    //             //     || user.employeeId && user.employeeId.includes(value)
    //             //     || user.email && user.email.toLowerCase().includes(value)
    //             //     || user.location && user.location.toLowerCase().includes(value) || user.location && user.location.includes(value)
    //             // )
    //              return (user.userName && user.userName.toLowerCase().includes(resultsN) || user.userName && user.userName.includes(resultsN)
    //                 || user.department && user.department.toLowerCase().includes(resultsD) || user.department && user.department.includes(resultsD)
    //                 || user.employeeId && user.employeeId.includes(resultsI)
    //                 || user.email && user.email.toLowerCase().includes(resultsE)
    //                 || user.location && user.location.toLowerCase().includes(resultsL) || user.location && user.location.includes(resultsL)
    //             )
    //         });
    //         setData(results)
    //     })
    // }

    // const handleChange = (value) => {
    //     setInput(value)
    //     setContent(value)

    // }

    return (<>

      {/* {
               content === "" ? <>
                    <p>Search to find Records</p>
                </>
                : null

        } */}
        {/* <p>{resultsN} , , , {resultsI}</p> */}
        {

            (resultsN != "" || resultsD != "" || resultsI != "" || resultsE != "" 
                || resultsM != "" || resultsL != "" || resultsG != "" ) && filteredData && length > 0 ? <>
                <table border="" className="customers-table " id='customers' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Employee ID</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Location</th>
                            <th>Gender</th>
                        </tr>

                    </thead>
                    <tbody>
                        {filteredData &&
                            (filteredData).map((l, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{l.userName}</td>
                                        <td>{l.employeeId}</td>
                                        <td>{l.department}</td>
                                        <td>{l.email}</td>
                                        <td>{l.phoneNumber}</td>
                                        <td>{l.location}</td>
                                        <td>{l.gender}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
                :
                content === "" ?
                <>
                    <p style={{marginLeft:"208px"}}>Search to find records</p>
                </>
            :
            <>
            <p style={{marginLeft:"208px", color:"red"}}> No records found </p>
            </>
        }

        {/* <div className="search-bar">

            <input type="text" placeholder="Search with Name" value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={() => handleChange(input)} style={{marginLeft:"0px",marginTop:"-1px"}} >&#128269;</button>
        </div> */}
        {/* <div className="search-bar">

            <input type="text" placeholder="Search with Name" value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={() => handleChange(input)} style={{marginLeft:"0px",marginTop:"-1px"}} >&#128269;</button>
        </div>
        <div className="search-bar">

            <input type="text" placeholder="Search with Name" value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={() => handleChange(input)} style={{marginLeft:"0px",marginTop:"-1px"}} >&#128269;</button>
        </div>
        <div className="search-bar">

            <input type="text" placeholder="Search with Name" value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={() => handleChange(input)} style={{marginLeft:"0px",marginTop:"-1px"}} >&#128269;</button>
        </div>
        <div className="search-bar">

            <input type="text" placeholder="Search with Name" value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={() => handleChange(input)} style={{marginLeft:"0px",marginTop:"-1px"}} >&#128269;</button>
        </div>
        <div className="search-bar">

            <input type="text" placeholder="Search with Name" value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={() => handleChange(input)} style={{marginLeft:"0px",marginTop:"-1px"}} >&#128269;</button>
        </div>
        <div className="search-bar">

            <input type="text" placeholder="Search with Name" value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={() => handleChange(input)} style={{marginLeft:"0px",marginTop:"-1px"}} >&#128269;</button>
        </div> */}
        {/* <div className="search-bar">
        <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0"  >
                    <input type="search" class="form-control" placeholder="SearchByCategory" aria-label="Search" onChange={e => { setInput(e.target.value) }} style={{ marginLeft: "35px" }} />

                    <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark" onClick={() => handleChange(input)} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </form>
        </div> */}

    </>
    )
}
