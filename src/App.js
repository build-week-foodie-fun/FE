import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import FormikLoginForm from "./components/Login";
import FormikSignUpForm  from "./components/SignUpForm";

const App = () => {
  return (
    <>
      {/* <Login /> */}

      <Router>
        <Switch>
          <Route exact path="/" component={FormikLoginForm} />
          <Route path="/signup" component={FormikSignUpForm} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
