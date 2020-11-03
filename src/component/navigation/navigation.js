import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './navigation.module.css';

const navigation = (props) => {
    return (
        <div className={classes.navigation}>
            <NavLink 
                exact
                to='/video-app/'
                className={classes.nav}
                activeClassName={classes.active}>
                SUMMARY
            </NavLink>
            <NavLink 
                exact
                to="/video-app/detailed"
                className={classes.nav}
                activeClassName={classes.active}>
                DETAILED
            </NavLink>
        </div>
    );
}

export default navigation;