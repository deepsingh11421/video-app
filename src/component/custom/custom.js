import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './custom.module.css';

function custom (props) {
    return (
        <div className={classes.custom}>
            CUSTOM <br/>
            <Button type="black">Tie</Button>
        </div>
    );
}

export default custom;