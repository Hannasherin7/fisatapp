import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import axios from 'axios'

export const ViewStudent = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
          (error)=>{
            console.log(error.message)
            alert(error.map)
          }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (

  <div>
        <NavBar></NavBar>
        <h1><center>View All Student Details</center></h1>
        
         <div class="container">
        <div class="row g-3">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table" border="2" >
                    <thead>
                      <tr>
                        <th scope="col">user id</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">College</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Course</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Address</th>
                        <th scope="col">__v</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        (value,index)=>
                            {
                                return <tr>
                                  <td>{value._id}</td>
                                  <td>{value.firstname}</td>
                                  <td>{value.lastname}</td>
                                  <td>{value.college}</td>
                                  <td>{value.dob}</td>
                                  <td>{value.course}</td>
                                  <td>{value.email}</td>
                                  <td>{value.mobile}</td>
                                  <td>{value.address}</td>
                                  <td>{value.__v}</td>
                                </tr>
                               
                            }
                    )}
                     </tbody>
                  </table>
            </div>
        </div>
    </div>

    </div>
  )
}
