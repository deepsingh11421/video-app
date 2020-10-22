import React from 'react'
import classes from './People.module.css';

export default function People(props) {
    return (
      <div className={classes.People}>
        <div className={classes.log}>
          <div className={classes.img}>
            <img src={props.photo} alt="person"></img>
            <div>{props.name}</div>
          </div>
          <div className={classes.img}>
            <img src={props.photo} alt="person"></img>
            <div>{props.name}</div>
          </div>
          <div className={classes.img}>
            <img src={props.photo} alt="person"></img>
            <div>{props.name}</div>
          </div>
          <div className={classes.img}>
            <img src={props.photo} alt="person"></img>
            <div>{props.name}</div>
          </div>
        </div>
      </div>
    );
}
