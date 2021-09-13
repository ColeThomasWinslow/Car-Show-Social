import React from "react";
import { AuctionBody } from "./components/Posts/Body";
import { NavComp } from "./components/authentication/NavComp";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileComp from "./components/ProfileComp";

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavComp />
        <Route exact path="/" component={AuctionBody} />
        <Route exact path="/Profile" component={ProfileComp} />
      </AuthProvider>
    </Router>
  );
};
