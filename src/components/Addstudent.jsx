import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const AddStudent = () => {
  const [data,setData]=useState(
    {
      "firstname":"",
      "lastname":"",
      "college":"",
      "course":"",
      "dob":"",
      "email":"",
      "mobno":"",
      "address":""
    }
  )
  const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  const readVlue=()=>{
    console.log(data)
  }
  return (
    <div>
      <NavBar></NavBar>
      <h1><center>ADD STUDENT DETAILS</center></h1>
      <div className="containe">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">First Name</label>
              <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Last Name</label>
              <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">college</label>
              <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">course</label>
              <input type="text" className="form-control"name='course'value={data.course}onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">DOB</label>
              <input type="date" className="form-control" name='dob'value={data.dob}onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Email</label>
              <input type="email" className="form-control" name='email'value={data.email}onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">mobile no</label>
              <input type="text" className="form-control" name='mobno'value={data.mobno}onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Address</label>
              <input type="text" className="form-control"name='address'value={data.address}onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <br /><button  onClick={readVlue} className="btn btn-success">Add Student</button>
            </div>
           </div>    
           </div>
           </div>
           </div>
           </div>
  )
}
