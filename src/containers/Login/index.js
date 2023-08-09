import React,{Component} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getData, setData, CustomIcon } from "../../utils/utils";

import { useNavigate } from "react-router-dom";



export default function Login(){

  const navigate = useNavigate();

const  handleOnSubmit=(e)=>{
  e.preventDefault();
  console.log("inside prevent default")
  setData("user_is_login", true);
  navigate("/react_admin/home");
  }

        return(
          <Container>
            <Row>
            <Col className="site-logo" xs={12}>
            <img
                    src={"/react_admin/images/site-logo.png"}
                    height={"70"}
                    width={"70"}
                  ></img>
            </Col>
            </Row>
            <Row>
              <Col xs={12}>
            <Form className="login-form" onSubmit={(e)=>handleOnSubmit(e)}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" disabled placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                 We'll never share your email with anyone else. 
              </Form.Text> */}
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control disabled type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
          </Row>
          </Container>
        
        )
    
}




