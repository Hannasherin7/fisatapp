import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import axios from 'axios'

export const ViewStudent = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (

    <div>
        <NavBar></NavBar>
        <h1><center>View All Student Details</center></h1>
        
         <div class="container">
        <div class="row g-3">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table" border="1">
                    <thead>
                      <tr>
                        <th scope="col">user id</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">College</th>
                      </tr>
                    </thead>
                    
                    {data.map(
                        (value,index)=>
                            {
                                return <tbody>
                                <tr>
                                  <td>{value._id}</td>
                                  <td>{value.firstname}</td>
                                  <td>{value.lastname}</td>
                                  <td>{value.college}</td>
                                </tr>
                                </tbody>
                            }
                    )}
                  </table>
            </div>
        </div>
    </div>

    </div>
  )
}
