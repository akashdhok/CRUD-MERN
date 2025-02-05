import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import {message} from 'antd'
const Insert = () => {
const[input , setInput] = useState({})

const changeHandler =(e)=>{
  let{name , value} = e.target
  setInput({
    ...input,
    [name] : value
  })
}
 function submitHandler(e)
{
  e.preventDefault()
  let api = "http://localhost:8080/employees/empdata"
  axios.post(api , input).then((res)=>{
    message.success("data saved")
    console.log(input)
  })
}
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto p-4 shadow-lg rounded bg-light">
          <h2 className="text-center text-primary mb-4">Insert Employee Data</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Employee Number</Form.Label>
              <Form.Control type="text" placeholder="Enter employee no." name='empno' onChange={changeHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter employee name" name='name' onChange={changeHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Employee Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter employee designation" name='designation' onChange={changeHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Employee Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter employee salary" name='salary' onChange={changeHandler} />
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" type="submit" onClick={submitHandler}>Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Insert;
