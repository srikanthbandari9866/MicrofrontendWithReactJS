import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect, useMemo } from 'react'
import './EyData.css'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { style } from '@mui/system'

export default () => {
    const [eyData, setEyData] = useState([])
    const [eyDataFilter,setEyDataFilter] = useState([])
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
                console.log(response.data.length)
            })

        if(cluster ==="" && application === "" &&  type === "" && technology === "" && platform === ""){
            setEyDataFilter([])
        }
        

    }, [inputs])
    function eyfilter(){
        if(cluster !=="" && application === "" &&  type === "" && technology === "" && platform === ""){
            axios.get(`http://localhost:8018/api/Ey/cluster/${cluster}`).then(response => {
                if(response.data.length > 0){
                    setEyDataFilter(response.data)
                    console.log(eyDataFilter)
                }
            })
        }
        if(cluster ==="" && application !== "" &&  type === "" && technology === "" && platform === ""){
            axios.get(`http://localhost:8018/api/Ey/application/${application}`).then(response => {
                if(response.data.length > 0){
                    setEyDataFilter(response.data)
                    console.log(eyDataFilter)
                }
            })
        }
        if(cluster ==="" && application === "" &&  type !== "" && technology === "" && platform === ""){
            axios.get(`http://localhost:8018/api/Ey/type/${type}`).then(response => {
                if(response.data.length > 0){
                    setEyDataFilter(response.data)
                    console.log(eyDataFilter)
                }
            })
        }
        if(cluster ==="" && application === "" &&  type === "" && technology !== "" && platform === ""){
            axios.get(`http://localhost:8018/api/Ey/technology/${technology}`).then(response => {
                if(response.data.length > 0){
                    setEyDataFilter(response.data)
                    console.log(eyDataFilter)
                }
            })
        }
        if(cluster ==="" && application === "" &&  type === "" && technology === "" && platform !== ""){
            axios.get(`http://localhost:8018/api/Ey/platform/${platform}`).then(response => {
                if(response.data.length > 0){
                    setEyDataFilter(response.data)
                    console.log(eyDataFilter)
                }
            })
        }
    }
    // console.log(eyData)

    const result = eyDataFilter
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
    function eyprePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function eychangeCpage(id) {
        setCurrentPage(id)
    }
    function eynextPage() {
        if (currentPage !== eynpage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage, setRecordsPerPage] = useState(4)
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = filteredData.slice(firstIndex, lastIndex)
    const npage = Math.ceil(filteredData.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    const eyrecords = eyData.slice(firstIndex, lastIndex)
    const eynpage = Math.ceil(eyData.length / recordsPerPage)
    const eynumbers = [...Array(eynpage + 1).keys()].slice(1)
    return (
        <>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
            <div className="container-fluid">
                
                <h3>EY {cluster}</h3>
                <div className="container">

                    <table border="" className="customers-tables " id='customerss'>
                        <thead >
                            <tr>
                            {/* &#128269; */}
                                <th> <button onClick={eyfilter} id='eysearch-button' >&#128269; </button> </th>
                                <th><input type="text" placeholder='cluster' id='inputs' name="cluster" value={inputs.cluster} onChange={Change} /></th>
                                <th><input type="text" placeholder='application' id='inputs' name='application' value={inputs.application} onChange={Change} /></th>
                                <th><input type="text" placeholder='type' id='inputs' name='type' value={inputs.type} onChange={Change} /></th>
                                <th><input type="text" placeholder='technology' id='inputs' name='technology' value={inputs.technology} onChange={Change} /></th>
                                <th><input type="text" placeholder='platform' id='inputs' name='platform' value={inputs.platform} onChange={Change} /></th>

                            </tr>
                            {/* {(cluster != "" || application != "" || type != "" || technology != "" || platform != "") ? */}
                            <tr>
                                <th>S.N</th>
                                <th>Cluster</th>
                                <th>Application</th>
                                <th>Type</th>
                                <th>Technology</th>
                                <th>Platform</th>
                            </tr>
                            {/* :
                                <p id='searchPara'>search to find records...</p>
                            } */}
                        </thead>

                        {
                            // (cluster != "" || application != "" || type != "" || technology != "" || platform != "") && 
                            eyData && eyDataFilter.length==0 && eyData.length > 0 ?
                                <tbody>
                                    {
                                        eyrecords && (eyrecords).map((i, index) => {
                                            return (
                                                <>
                                                    <tr key={index}>
                                                        <td>{firstIndex + index + 1}</td>
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
                                : records && records.length>0?
                                <tbody>
                                {
                                    records && (records).map((i, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <td>{firstIndex + index + 1}</td>
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
                   {
                    records && records.length === 0 ?
                    <nav>
                        
                        <ul className='pagination'>
                            {/* <li className='page-item'> */}
                                <a href='#' className='page-link prev'
                                    onClick={eyprePage} > Prev</a>
                            {/* </li> */}

                            {
                                eynumbers && eynumbers.map((n, i) => (
                                    // <li className='page-item' key={i}>
                                        <a href='#' className={`page-link ${currentPage === n ? 'active' : ''}`}
                                            onClick={() => eychangeCpage(n)} > {n}</a>
                                    // </li>
                                ))
                            }

                            {/* <li className='page-item'> */}
                                <a href='#' className='page-link next'
                                    onClick={eynextPage} > Next</a>
                            {/* </li> */}
                            <div className="setRecords">
                                <label htmlFor="" className='row-label'>copies: </label>
                            <input className='row-input' type='number' placeholder={recordsPerPage} value={recordsPerPage} onChange={(e) => setRecordsPerPage(e.target.value)} />
                            </div>
                        </ul>
                    </nav>
                    :
                    <nav>
                        
                        <ul className='pagination'>
                            {/* <li className='page-item'> */}
                                <a href='#' className='page-link prev'
                                    onClick={prePage} > Prev</a>
                            {/* </li> */}

                            {
                                numbers && numbers.map((n, i) => (
                                    // <li className='page-item' key={i}>
                                        <a href='#' className={`page-link ${currentPage === n ? 'active' : ''}`}
                                            onClick={() => changeCpage(n)} > {n}</a>
                                    // </li>
                                ))
                            }

                            {/* <li className='page-item'> */}
                                <a href='#' className='page-link next'
                                    onClick={nextPage} > Next</a>
                            {/* </li> */}
                            <div className="setRecords">
                                <label htmlFor="" className='row-label'>copies: </label>
                            <input className='row-input' type='number' placeholder={recordsPerPage} value={recordsPerPage} onChange={(e) => setRecordsPerPage(e.target.value)} />
                            </div>
                        </ul>
                    </nav>
                   }

                </div>
            </div>
        </>
    )

}