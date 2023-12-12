import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './Ey.css'

export default () => {

    const [eyData, setEyData] = useState([])

    const [inputs, setInputs] = useState({
        cluster: "", application: "", type: "", technology: "", platform: ""
    })

    const Change = (e) => {
        setInputs({ ...inputs, [e.target.name]: [e.target.value] })
    }
    const { cluster, application, type, technology, platform } = inputs

    useEffect(() => {
        axios.get("http://localhost:8018/api/Ey").then(
            response => {
                setEyData(response.data)
            })
    }, [])
    // console.log(eyData)

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

    return (
        <>
            <div className="container">
                <h1>EY</h1>
                <p>{cluster} </p>
                <p>{application} </p>
                <p>{type} </p>
                <p>{technology} </p>
                <p>{platform} </p>

                <table border='' className="customers-tables " id='customerss' >
                    <thead >
                        <tr>
                            <th><input type="text" placeholder='cluster' style={{ padding: "10px" }} name="cluster" value={inputs.cluster} onChange={Change} /></th>
                            <th><input type="text" placeholder='application' style={{ padding: "10px" }} name='application' value={inputs.application} onChange={Change} /></th>
                            <th><input type="text" placeholder='type' style={{ padding: "10px" }} name='type' value={inputs.type} onChange={Change} /></th>
                            <th><input type="text" placeholder='technology' style={{ padding: "10px" }} name='technology' value={inputs.technology} onChange={Change} /></th>
                            <th><input type="text" placeholder='platform' style={{ padding: "10px" }} name='platform' value={inputs.platform} onChange={Change} /></th>

                        </tr>
                        <tr>
                            <th>Cluster</th>
                            <th>Application</th>
                            <th>Type</th>
                            <th>Technology</th>
                            <th>Platform</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filteredData && (filteredData).map((i, index) => {
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
                                                                <tr >

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
                                                                <tr>

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

                </table>
            </div>
        </>
    )
}