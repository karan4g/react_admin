import React, { Component } from "react";
import { getData, setData, CustomIcon } from "../../utils/utils";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

import Button from "react-bootstrap/Button";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default class Home extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        listItems: [],
        inputData: "",
      };
    }
  }
  componentDidMount() {
    let getListItems = getData("my_todo_list");

    if (!getListItems) {
      getListItems = [];
    } else {
      getListItems = JSON.parse(getListItems);
    }

    this.setState({ listItems: getListItems });
  }

  handleSubmit = () => {
    if (!this.state.inputData) {
      return true;
    }
    var getOldList = getData("my_todo_list");
    if (getOldList) {
      getOldList = JSON.parse(getOldList);
    } else {
      getOldList = [];
    }
    getOldList.push(this.state.inputData);
    this.setState({ inputData: "" });
    setData("my_todo_list", getOldList);
    this.setState({ listItems: getOldList });
  };
  handleOnChange = (val) => {
    // console.log(val.target.value," handle on change called")
    this.setState({ inputData: val.target.value });
  };
  onRemoveItem = (key) => {
    let getItem = this.state.listItems;
    getItem.splice(key, 1);
    setData("my_todo_list", getItem);
    this.setState({ listItems: getItem });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="component-heading">
              <CustomIcon
                iconName="HouseDoorFill"
                color="#215cad"
                size={30}
                className="menu-icons"
              />
              <h1>Home</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">To Do List</div>
                </div>
              </ListGroup.Item>
              {this.state.listItems && this.state.listItems.length
                ? this.state.listItems.map((obj, i) => {
                    return (
                      <ListGroup.Item className="todo-listing" key={i}>
                        <Row>
                          <Col xs={6}>{obj}</Col>
                          <Col xs={6} className="remove-todo-list">
                            <CustomIcon
                              iconName="XCircleFill"
                              color="black"
                              size={20}
                              className="remove-todo-list"
                              onClick={() => this.onRemoveItem(i)}
                            />
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    );
                  })
                : null}
              <ListGroup.Item>
                <Row className="add-item-row">
                  <Col xs={1}>
                    <CustomIcon
                      iconName="PlusCircleFill"
                      color="black"
                      size={20}
                      className="add-todo-list"
                      onClick={() => this.handleSubmit()}
                    />
                  </Col>
                  <Col xs={10}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="To Do Item"
                      className="mb-3"
                    >
                      <Form.Control
                        value={this.state.inputData}
                        onChange={(val) => this.handleOnChange(val)}
                        type="text"
                        placeholder="...."
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <Button
                      onClick={() => this.handleSubmit()}
                      variant="outline-primary"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
