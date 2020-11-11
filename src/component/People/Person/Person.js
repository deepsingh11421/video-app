import React, { Component } from "react";
import classes from './Person.module.css';


export default class Person extends Component {
  render() {
    var person=(<div>
        <div onClick={()=>this.props.handler(this.props.index)} className={classes.img}>
          <img
            src={this.props.avatar}
            alt="person avatar"
          ></img>
          <div>{this.props.person}</div>
        </div>
    </div>)
    
    if (this.props.active === true) {
      person=(<div>
        <div onClick={()=>this.props.handler(this.props.index)} className={classes.img}>
          <img
            style={{ boxShadow: "0px 0px 15px #888888" }}
            src={this.props.avatar}
            alt="person avatar"
          ></img>
          <div>{this.props.person}</div>
        </div>
      </div>)
    }
    return person;

  }
}


