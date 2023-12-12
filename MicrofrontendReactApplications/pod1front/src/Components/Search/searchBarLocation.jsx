import React, { useState } from 'react'
import "./searchBar.css"

export default (props) => {
    const setResultsL = props.setResultsL
    const setContent = props.setContent
    const [input, setInput] = useState("");


    const handleChange = (value) => {
        setInput(value)
        setContent(value)
        // fetchData(value)
        setResultsL(value)
    }

    return (<>
        <div className="search-bar">
           
            <input type="text" placeholder="Search with Location" value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            {/* <button onClick={() => handleChange(input)} style={{marginLeft:"0px",marginTop:"-1px"}} >&#128269;</button> */}
        </div>

    </>
    )
}


// import React, { useState } from 'react'
// import "./searchBar.css"

// export default (props) => {
//     const setResults = props.setResultsL
//     const setContent = props.setContentL
//     const [input, setInput] = useState("");

//     const fetchData = (value) => {
//         fetch(`http://localhost:8018/api/Users`)
//             .then((response) => response.json())
//             .then((json) => {
//                 const results = json.filter((user) => {
//                     return value && user && (user.location && user.location.toLowerCase().includes(value) || user.location && user.location.includes(value))
//                 });
//                 setResults(results)
//             })
//     }

//     const handleChange = (value) => {
//         setInput(value)
//         setContent(value)
//         fetchData(value)
//     }

//     return (<>
//         <div className="search-bar">
           
//             <input type="text" placeholder="Search with Location" value={input}
//                 onChange={(e) => handleChange(e.target.value)}
//             />
//             <button onClick={() => handleChange(input)} style={{marginLeft:"0px",marginTop:"-1px"}} >&#128269;</button>
//         </div>
//         {/* <div className="search-bar">
//         <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0"  >
//                     <input type="search" class="form-control" placeholder="SearchByCategory" aria-label="Search" onChange={e => { setInput(e.target.value) }} style={{ marginLeft: "35px" }} />

//                     <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark" onClick={() => handleChange(input)} >
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//                       </svg>
//                     </button>
//                   </form>
//         </div> */}

//     </>
//     )
// }
