import axios from "axios";
import React, { useState } from "react"
const Search = () => {
    const[val , setVal] = useState("")
    const[myData , setMyData] = useState([])
    const submitHandler = async ()=>{
        let api = "http://localhost:8080/employees/search"
        const response = await axios.post(api , {empno:val})
        setMyData(response.data)
        
    }
    return (
     <>
      <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center mb-4">Search Employee Data</h2>
          <div className="mb-3">
            <label className="form-label">Enter Employee Number:</label>
            <input type="text" className="form-control" placeholder="Employee Number" value={val} onChange={(e)=>setVal(e.target.value)} />
          </div>
          <button className="btn btn-primary w-100" onClick={submitHandler}>Search</button>
        </div>
      </div>
      <div className="container mt-4">
  <div className="table-responsive">
    <table className="table table-bordered table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>Empno</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {myData.map((e, index) => (
          <tr key={index}>
            <td>{e.empno}</td>
            <td>{e.name}</td>
            <td>{e.designation}</td>
            <td>{e.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

     </>
    );
  };
  
  export default Search;
  