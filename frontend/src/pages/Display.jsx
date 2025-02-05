import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Container, Card } from "react-bootstrap";
const Display = () => {
  const[empData , setEmpData] = useState([])
  const loadData = async ()=>{
   let api = "http://localhost:8080/employees/display"
  let res =  await axios.get(api)
    setEmpData(res.data)
    console.log(res.data)
  }
   useEffect(()=>{
    loadData()
   } , [])

  return (
    <>
     <Container className="mt-4">
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title className="text-center display-6 fw-bold text-primary">
            Employee Data
          </Card.Title>
          <hr />
          <Table responsive striped bordered hover className="text-center">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Emp No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {empData.map((e, index) => (
                <tr key={index}>
                  <td className="fw-bold">{index + 1}</td>
                  <td>{e.empno}</td>
                  <td>{e.name}</td>
                  <td>{e.designation}</td>
                  <td>{e.salary}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}

export default Display