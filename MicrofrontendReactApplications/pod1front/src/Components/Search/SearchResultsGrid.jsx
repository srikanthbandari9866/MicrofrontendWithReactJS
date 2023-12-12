import React from 'react'
import "./SearchResultsGrid.css"

export default (props) => {
    const userData = props.results;
    const content = props.content;
    const length = userData.length;
    return (
        <div className="grid_page">
            {
                userData && length>0 ? <>

                    <table border=""  className="customers-table " id='customers' >
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
                            {userData &&
                                (userData).map((l, index) => {
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
                </> : content && content != "" ?
                     <>
                        <p> No records found </p>
                    </>
                    :
                    // <>
                    //     <p className='para'>Search to find records</p>
                    // </>
                    null
            }
        </div>
    )
}
