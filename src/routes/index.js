import React, { Component } from "react";

import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";

import AppWrapper from "../layouts/AppWrapper";
import Home from "../containers/Home"

export default class MyRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<AppWrapper MyComponents={<Home />} />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

// class PublicRoutes extends Component {
//   render() {
//     return (<Route path="/" element={<AppWrapper MyComponents={<Home />} />} />);
//   }
// }
