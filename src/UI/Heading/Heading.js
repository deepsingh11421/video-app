import React from 'react';
import classes from './Heading.module.css';

const Heading = (props) => {
    return (
        <div className={classes.heading}>
            {props.children}
        </div>
    );
}

export default Heading;