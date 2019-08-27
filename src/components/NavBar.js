import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import Button from "@material-ui/core/Button/index";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 64,
    },
    navBar: {
        background: 'white',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1.5px solid #EDEDED',
    },
    title: {
        flexGrow: 1,
        paddingLeft: '1rem',
    },
}));

const LinkButton = withStyles(theme => ({
    root: {
        color: 'black',
        '&:hover': {
           color: 'black'
        },
    },

}))(Button);


const NavBar = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.navBar}>
                <Toolbar>
                    <Avatar alt="Logo" src="Foodie_app_icon"/>
                    <Typography variant="h6" className={classes.title}>
                        Foodie Fun
                    </Typography>
                    <LinkButton component={RouterLink} to="/">Dashboard</LinkButton>
                    <LinkButton component={RouterLink} to="/">Login</LinkButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default NavBar;