import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const SearchStudent = () => {
    const [data,setData]=useState(
        {
            "name":"",
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }

  return (
    <div>
        <NavBar></NavBar>
        <h1><center>SEARCH STUDENT</center></h1>
        <div className="container">
            <div className="row">
                <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" name='name'value={data.name}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <br /> <br /><button onClick={readValue} className="btn btn-primary">search</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
  )
}