import React from "react";
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

//Components
import NavBar from "./components/NavBar";
import FormikLoginForm from "./components/Login";
import FormikSignUpForm from "./components/SignUpForm";
import Profile from "./components/Profile";
import ReviewForm from "./components/ReviewForm";
import SingleReviewDetail from "./components/SingleReviewDetail";

//Material-ui
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";


import "./App.css";



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
    return (
        <>
            <MuiThemeProvider theme={theme}>
                <Router>
                    <NavBar/>
                        <Switch>
                            {/* {public routes} */}
                            <Route path="/login" component={FormikLoginForm}/>
                            <Route path="/signup" component={FormikSignUpForm}/>

                            {/* {private routes} */}
                            <PrivateRoute exact path="/profile" component={Profile}/>
                            <PrivateRoute
                                exact
                                path="/profile/review/:id"
                                component={SingleReviewDetail}
                            />
                            <PrivateRoute
                                exact
                                path="/profile/reviewform"
                                component={ReviewForm}
                            />

                            {/* {default} */}
                            <Redirect from="/" to="/profile"/>
                        </Switch>
                </Router>
            </MuiThemeProvider>
        </>
    );
};

export default App;
