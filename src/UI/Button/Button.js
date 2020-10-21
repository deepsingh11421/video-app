import React from 'react';
import classes from './Button.module.css';

function Button (props) {
    var button = [];
    button.push(classes.button);
    if(props.type === 'danger'){
        button.push(classes.danger);
    }else if(props.type === 'green'){
        button.push(classes.green);
    }else if(props.type === 'purple'){
        button.push(classes.purple);
    }else if(props.type === 'black'){
        button.push(classes.black);
    }
    button = button.join(' ');

    return (
        <button className={button}>{props.children}</button>
    )
}

export default Button;