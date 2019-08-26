import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <h1>App</h1>
        <Switch>{/* Insert routes */}</Switch>
      </Router>
    </>
  );
};

export default App;
