import React,{Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";








export default class AuthWrapper extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="auth-wrapper">
                <Container className="auth-container">
                    <Row>
                        <Col className="auth-cols" xs={12} xl={6}>
                            <img className="auth-image" src="/react_admin/images/auth.jpg"/>
                            </Col>
                        <Col className="auth-cols" xs={12} xl={6}>
                        {this.props.MyComponents}
                        </Col>
                    </Row>
                </Container>
               
            </div>
        )
    }
}