import React, { Component } from "react";
import { Link } from "react-router-dom";

import { CustomIcon } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import {removeData} from "../utils/utils";

 class MyApp extends Component {
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
    this.MenuItems = [
      {
        label: "Home",
        path: "/react_admin/home",
        icon: (
          <CustomIcon
            iconName="HouseDoorFill"
            color="white"
            size={20}
            className="menu-icons"
          />
        ),
      },
      {
        label: "Home 2",
        path: "/react_admin/dsfsd",
        icon: (
          <CustomIcon
            iconName="FileEarmarkPlayFill"
            color="white"
            size={20}
            className="menu-icons"
          />
        ),
      },
      {
        label: "Logout",
        path: "/react_admin/login",
        icon: (
          <CustomIcon
            iconName="BoxArrowLeft"
            color="white"
            size={20}
            className="menu-icons"
          />
        ),
      },
    ];
  }
  handleLogout=(e)=>{
    e.preventDefault();
    console.log("indise logout")
    removeData("user_is_login")
   return this.props.navigate("/react_admin/login");
  }

  handleNavigation=(path,e)=>{
    e.preventDefault();
    var windowWidth=window.innerWidth;
    if(windowWidth <= 500){
      this.setState({ isNotActive: true })
    }
    return this.props.navigate(path);
  }
  OpenCollapse = () => {
    this.setState({ isNotActive: !this.state.isNotActive });
  };

  //     const [isNotActive, setNotActive] = useState("true");
  //   const [isDropdownActive, setDropdownActive] = useState("false");
  render() {
    return (
      <main>
        <div className="appwrapper">
          <div
            className={`wrapper ${this.state.isNotActive ? "" : "inactive"}`}
          >
            <nav
              id="sidebar"
              className={this.state.isNotActive ? "active" : ""}
            >
              <button
                type="button"
                id="sidebarCollapse"
                onClick={() => this.OpenCollapse()}
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
                <li className="list-item">
                  <Link to={"/react_admin/home"}>
                    <img
                      src={"/react_admin/images/site-logo.png"}
                      className="rounded-circle usr-image"
                      height={this.state.isNotActive ? "20" : "70"}
                      width={this.state.isNotActive ? "20" : "70"}
                    ></img>
                    <h4>AdminPanel</h4>
                  </Link>
                </li>
                {this.MenuItems && this.MenuItems.length
                  ? this.MenuItems.map((obj, i) => {
                      return (
                        <li key={i} className="list-item">
                          <Link to={obj.path} onClick={(obj.label == "Logout") ? (e)=>this.handleLogout(e) : (e)=>this.handleNavigation(obj.path,e)}>
                            {obj.icon}
                            <span>{obj.label}</span>
                          </Link>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </nav>
          </div>
          <div className="my-component-wrapper">{this.props.MyComponents}</div>
        </div>
      </main>
    );
  }
}

export default function AppWrapper(props){
  const navigate = useNavigate();
 return(
  <>
  <MyApp navigate={navigate} {...props}/>
  </>
 )
}
