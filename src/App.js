import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import ReviewForm from "./components/ReviewForm.js";

//Components
import NavBar from "./components/NavBar";
import FormikLoginForm from "./components/Login";
import FormikSignUpForm from "./components/SignUpForm";

//Material-ui
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";

import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily:
      "-apple-system,system-ui,BlinkMacSystemFont," + '"Montserrat", "Nunito"',
  },
  palette: {
    primary: {
      main: "#D80000",
      light: "#ff0000",
      dark: "#ab0000",
      contrastText: "white",
    },
    secondary: {
      main: "#C6C6C6",
      light: "#EDEDED",
      dark: "#7C7C7C",
      contrastText: "white",
    },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Container maxWidth="md" className={classes.root}>
            <h1>App</h1>
            <ReviewForm />
            <Switch>
              <Route path="/login" component={FormikLoginForm} />
              <Route path="/signup" component={FormikSignUpForm} />
            </Switch>
          </Container>
        </Router>
      </MuiThemeProvider>
    </>
  );
};

export default App;
