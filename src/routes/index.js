import React, { Component } from "react";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

import AppWrapper from "../layouts/AppWrapper";
import AuthWrapper from "../layouts/AuthWrapper";
import Home from "../containers/Home"
import Login from "../containers/Login"
import NotFound from "../containers/NotFound"
import {getData} from "../utils/utils";

export default class MyRoutes extends Component {
  constructor(props){
    super(props);
  }
  isSignedIn=()=>{
    return getData("user_is_login");
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/react_admin">
          <Route>
        <Route path="home" element={
        <PrivateRoute isSignedIn={this.isSignedIn}>
        <AppWrapper MyComponents={<Home />} />
        </PrivateRoute>} />
        <Route path="*" element={
        <PrivateRoute isSignedIn={this.isSignedIn}>
        <AppWrapper MyComponents={<NotFound />} />
        </PrivateRoute>}
        />
        </Route>
        <Route index element={
          <PublicRoute isSignedIn={this.isSignedIn}>
          <Navigate to="/react_admin/login"  />
            </PublicRoute>
        }/>
           <Route path="login" element={
           <PublicRoute isSignedIn={this.isSignedIn}>
           <AuthWrapper MyComponents={<Login />} />
           </PublicRoute>}
           />

        {/* <Route
      exact
      path={path}
      render={(props) => {
        return isLoggedIn("bb-user-token") && path == "/login" ? (
          <Redirect to="/dashboard" />
        ) : path === "/" ? <Redirect to="/login" /> : (
          <PublicMain {...props}>
            <ScrollRestoration {...props}>
              <Component {...props} toast={toast} />
            </ScrollRestoration>
          </PublicMain>
        );
      }}
    ></Route> */}
        </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

function PublicRoute ({ isSignedIn, children }){
  if (isSignedIn()) {
    return <Navigate to="/react_admin/home" replace />
  }
  return children
}
function PrivateRoute ({ isSignedIn, children }){
  if (!isSignedIn()) {
    return <Navigate to="/react_admin/login" replace />
  }
  return children
}
