import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import Button from "@material-ui/core/Button/index";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { logout } from "../store/auth/authActions";
import Logo from "../img/Foodie_Icon.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 64,
  },
  navBar: {
    background: "white",
    color: "black",
    boxShadow: "none",
    borderBottom: "1.5px solid #EDEDED",
  },
  title: {
    flexGrow: 1,
    paddingLeft: "1rem",
    color: "#D80000",
    fontFamily: "Nunito",
  },
}));

const LinkButton = withStyles(theme => ({
  root: {
    color: "black",
    "&:hover": {
      color: "black",
    },
  },
}))(Button);

const NavBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar}>
        <Toolbar>
          <a href="https://build-week-foodie-fun.github.io/UI/">
            <Avatar alt="Logo" src={Logo} />
          </a>
          <Typography variant="h4" className={classes.title}>
            Foodie Fun
          </Typography>
          {!props.isAuth && (
            <LinkButton component={RouterLink} to="/login">
              Login
            </LinkButton>
          )}
          {!props.isAuth && (
            <LinkButton component={RouterLink} to="/signup">
              Sign up
            </LinkButton>
          )}
          {props.isAuth && (
            <LinkButton component={RouterLink} to="/profile">
              Profile
            </LinkButton>
          )}
          {props.isAuth && (
            <LinkButton component={RouterLink} to="/profile/reviewForm">
              Create Review
            </LinkButton>
          )}
          {props.isAuth && (
            <LinkButton component={RouterLink} onClick={() => props.logout()}>
              Logout
            </LinkButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(
  mapPropsToState,
  { logout },
)(NavBar);
