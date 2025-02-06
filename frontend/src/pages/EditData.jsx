import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import {message} from "antd"
const EditData = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const loadData = async () => {
    let api = `http://localhost:8080/employees/getdata`;
    let res = await axios.post(api, { empid: id });
    setData(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const chnageHandler = (e)=>{
    let{name , value}  = e.target
    setData({
        ...data,
        [name] : value
    })
  }
  const submitHandler = async(e)=>{
    e.preventDefault()
    let api = "http://localhost:8080/employees/updatedata"
    let res = await axios.post(api , data)
    message.success(res)
  }
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100">
          <Col
            xs={12}
            md={6}
            lg={4}
            className="mx-auto p-4 shadow-lg rounded bg-light"
          >
            <h2 className="text-center text-primary mb-4">
              Update Employee Data
            </h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Employee Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee no."
                  name="empno"
                  value={data.empno}
                  onChange={chnageHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee name"
                  name="name"
                  value={data.name}
                  onChange={chnageHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Employee Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee designation"
                  name="designation"
                  value={data.designation}
                  onChange={chnageHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Employee Salary</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee salary"
                  name="salary"
                  value={data.salary}
                  onChange={chnageHandler}
                />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit" onClick={submitHandler}>
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditData;
