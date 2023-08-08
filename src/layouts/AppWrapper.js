import React, { Component } from "react";
import { Link } from "react-router-dom";
// import image from "/images/site-logo.png";
// import * as icons from 'react-bootstrap-icons';
import { CustomIcon } from "../utils/utils";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

export default class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotActive: true,
      isDropdownActive: false,
    };
    this.barsIcon = (
      <CustomIcon
        iconName="List"
        color="white"
        size={20}
        className="menu-header-icon"
      />
    );
    this.crossIcon = (
      <CustomIcon
        iconName="XSquareFill"
        color="white"
        size={20}
        className="menu-close-icon"
      />
    );
    this.MenuItems=[
        {
            label:"Home",
            path:"/",
            icon: <CustomIcon
            iconName="HouseDoorFill"
            color="white"
            size={20}
            className="menu-icons"
          />
    },
    {
        label:"Home 2",
        path:"/dsfsd",
        icon:    <CustomIcon
        iconName="FileEarmarkPlayFill"
        color="white"
        size={20}
        className="menu-icons"
      />
}
]
  }
  componentDidMount(){
    window.addEventListener("resize", this.calculateScreenSize);
  }

  componentWillUnmount() {
    // Make sure to remove the DOM listener when the component is unmounted.
    window.removeEventListener("resize", this.calculateScreenSize);
  }

  calculateScreenSize =()=>{
    var innerWidth=window.innerWidth;
    if(innerWidth <= 500){
      this.setState({ isNotActive: false });
    }
  }
  OpenCollapse= ()=>{
    var innerWidth=window.innerWidth;
    if(innerWidth <= 500){
      return true;
    }
    this.setState({ isNotActive: !this.state.isNotActive })
  }

  //     const [isNotActive, setNotActive] = useState("true");
  //   const [isDropdownActive, setDropdownActive] = useState("false");
  render() {
    return (
      <main>
       <div className="appwrapper">
            <div className="wrapper">
              <nav
                id="sidebar"
                className={this.state.isNotActive ? "active" : ""}
              >
                <button
                  type="button"
                  id="sidebarCollapse"
                  onClick={() =>
                    this.OpenCollapse()
                  }
                  className="btn btn-custom"
                >
                  <span className={this.state.isNotActive ? "" : "hidden"}>
                    {this.barsIcon}
                  </span>
                  <span className={this.state.isNotActive ? "hidden" : ""}>
                    {this.crossIcon}
                  </span>
                </button>
                {/* <div className="sidebar-header">
                  <img
                    src={"/images/site-logo.png"}
                    className="rounded-circle usr-image"
                    height={this.state.isNotActive ? "30" : "70"}
                    width={this.state.isNotActive ? "30" : "70"}
                  ></img>
                  <h3>Admin Panel</h3>
                </div> */}

                <ul className="list-unstyled components">
                <li  className="list-item">
                                <Link to={"/"}>
                      <img
                    src={"/images/site-logo.png"}
                    className="rounded-circle usr-image"
                    height={this.state.isNotActive ? "20" : "70"}
                    width={this.state.isNotActive ? "20" : "70"}
                  ></img>
                  <h4>AdminPanel</h4>
                                </Link>
                              </li> 
                    {
                        this.MenuItems && this.MenuItems.length ?
                        this.MenuItems.map((obj,i)=>{
                            return(
                                <li key={i} className="list-item">
                                <Link to={obj.path}>
                                  {obj.icon}
                                  <span>{obj.label}</span>
                                </Link>
                              </li> 
                            )
                        })
                        :null
                    }

                </ul>
              </nav>
            </div>
            <div class="my-component-wrapper">
          {this.props.MyComponents}
          </div>
          </div>
      </main>
    );
  }
}
