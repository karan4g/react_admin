import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppWrapper from "../layouts/AppWrapper";
import Home from "../containers/Home"
import NotFound from "../containers/NotFound"

export default class MyRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<AppWrapper MyComponents={<Home />} />}/>
        <Route path="*" element={<AppWrapper MyComponents={<NotFound />} />}/>
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
