import React from 'react'
import classes from './Person.module.css';
export default function Person(props) {
    return (
      <div className={classes.img}>
        <img src={props.avatar} alt="person avatar"></img>
        <div>{props.person}</div>
      </div>
    );
}
