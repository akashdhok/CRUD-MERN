import React from 'react'
import axios from 'axios'
import{ useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { Table, Container, Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import {message} from "antd"
import { useNavigate } from 'react-router-dom';
const Update = () => {
  const navigate = useNavigate()
  const[empData , setEmpData] = useState([])
  const myDel = async(id)=>{
    let api = `http://localhost:8080/employees/empdelete/?empid=${id}`
    const res = await axios.get(api)
    message.success("Deleted Successfully")
  }
  const loadData = async ()=>{
   let api = "http://localhost:8080/employees/display"
  let res =  await axios.get(api)
    setEmpData(res.data)
  }
   useEffect(()=>{
    loadData()
   } , [myDel])
  const myEdit = (id)=>{
    navigate(`/editdata/${id}`)
  } 
  return (
    <>
     <Container className="mt-4">
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title className="text-center display-6 fw-bold text-primary">
            Update Employee Data
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
                <th>Delete</th>
                <th>Update</th>

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
                  <td><MdDelete onClick={()=>{myDel(e._id)}} /></td>
                  <td><FaEdit onClick={()=>{myEdit(e._id)}} /></td>
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

export default Update