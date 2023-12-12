import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './EyData.css'

export default () => {


    const [eyData, setEyData] = useState([])

    const [inputs, setInputs] = useState({
        cluster: "", application: "", type: "", technology: "", platform: ""
    })

    const Change = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const { cluster, application, type, technology, platform } = inputs

    useEffect(() => {
        axios.get("http://localhost:8018/api/Ey").then(
            response => {
                setEyData(response.data)
                // pages()
            })
    }, [eyData])
    // console.log(eyData.length)
    

    const result = eyData
        .map(item => ({
            ...item,
            eyChild: item.eyChild
                .filter(child =>
                    (child.technology.toLowerCase().includes(technology))

                ).filter(child => child.platform.toLowerCase().includes(platform))
        }))
        .filter(item => item.eyChild.length > 0)

    const filteredData = result.filter((item) => {
        const matchSearch1 = item.cluster.toLowerCase().includes(cluster) || item.cluster.toUpperCase().includes(cluster) || item.cluster.includes(cluster);
        const matchSearch2 = item.application.toLowerCase().includes(application) || item.application.includes(application);
        const matchSearch3 = item.type.toLowerCase().includes(type) || item.type.includes(type);
        return matchSearch1 && matchSearch2 && matchSearch3
    });

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function changeCpage(id) {
        setCurrentPage(id)
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 4
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = filteredData.slice(firstIndex, lastIndex)
    const npage = Math.ceil(filteredData.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    //     let records
    //     let npage
    //    const [numbers,setNumbers] = useState([])
    //     function pages(){
    //         if (eyData !== undefined) {
    //             records = eyData.slice(firstIndex, lastIndex)
    //             npage = Math.ceil(eyData.length / recordsPerPage)
    //             let n = [...Array(npage + 1).keys()].slice(1)
    //             setNumbers(n)
    //             // console.log(numbers,npage)
    //         }
    //     }

    return (
        <>
            <div className="container-fluid">
                <h1>EY Search</h1>
                <div className="container-fluid">

                    <table border="" className="customers-table " id='customers'>
                        <thead >
                            <tr>
                                <th><input type="text" placeholder='cluster' id='inputs' name="cluster" value={inputs.cluster} onChange={Change} /></th>
                                <th><input type="text" placeholder='application' id='inputs' name='application' value={inputs.application} onChange={Change} /></th>
                                <th><input type="text" placeholder='type' id='inputs' name='type' value={inputs.type} onChange={Change} /></th>
                                <th><input type="text" placeholder='technology' id='inputs' name='technology' value={inputs.technology} onChange={Change} /></th>
                                <th><input type="text" placeholder='platform' id='inputs' name='platform' value={inputs.platform} onChange={Change} /></th>

                            </tr>
                            {/* {(cluster != "" || application != "" || type != "" || technology != "" || platform != "") ? */}
                            <tr>
                                <th>Cluster</th>
                                <th>Application</th>
                                <th>Type</th>
                                <th>Technology</th>
                                <th>Platform</th>
                            </tr>
                            {/* //     :
                            //     <p id='searchPara'>search to find records...</p>
                            // } */}
                        </thead>

                        {
                            // (cluster != "" || application != "" || type != "" || technology != "" || platform != "") &&
                            records && records.length > 0 ?
                                <tbody>
                                    {
                                        records && (records).map((i, index) => {
                                            return (
                                                <>
                                                    <tr key={index}>
                                                        <td>{i.cluster}</td>
                                                        <td>{i.application}</td>
                                                        <td>{i.type}</td>
                                                        <td>
                                                            {
                                                                (i.eyChild).map(d => {
                                                                    return (
                                                                        <>
                                                                            <tr className='subrow'>
                                                                                <li>{d.technology}</li>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                })
                                                            }

                                                        </td>
                                                        <td >
                                                            {
                                                                (i.eyChild).map(d => {
                                                                    return (
                                                                        <>
                                                                            <tr className='subrow'>
                                                                                <li>{d.platform}</li>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                })
                                                            }

                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                                :
                                records.length === 0 ?
                                    <p>No records found</p>
                                    :
                                    null
                        }

                    </table>
                    <nav>
                        <ul className='pagination'>
                            <li className='page-item'>
                                <a href='#' className='page-link'
                                    onClick={prePage} > Prev</a>
                            </li>

                            {
                                numbers && numbers.map((n, i) => (
                                    <li className='page-item' key={i}>
                                        <a href='#' className={`page-link ${currentPage === n ? 'active' : ''}`}
                                            onClick={() => changeCpage(n)} > {n}</a>
                                    </li>
                                ))
                            }

                            <li className='page-item'>
                                <a href='#' className='page-link'
                                    onClick={nextPage} > Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
