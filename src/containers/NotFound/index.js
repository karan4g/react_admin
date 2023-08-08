import React,{Component} from "react";
import {  CustomIcon } from "../../utils/utils";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";








export default class NotFound extends Component{

    render(){
        return(<Container className="content-container">
            <Row>
              <Col>
                <div className="component-heading" style={{justifyContent:"center"}}>
                  <CustomIcon
                    iconName="BugFill"
                    color="#215cad"
                    size={30}
                    className="menu-icons"
                  />
                  <h1> Page Not Found 404</h1>
                </div>
              </Col>
            </Row>
            </Container>
            
            )
    }
}