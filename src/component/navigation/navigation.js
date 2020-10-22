import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './navigation.module.css';

const navigation = (props) => {
    return (
        <div className={classes.navigation}>
            <NavLink 
                exact
                to="/"
                className={classes.nav}
                activeClassName={classes.active}>
                SUMMARY
            </NavLink>
            <NavLink 
                exact
                to="/detailed"
                className={classes.nav}
                activeClassName={classes.active}>
                DETAILED
            </NavLink>
        </div>
    );
}

export default navigation;