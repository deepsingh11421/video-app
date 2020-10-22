import React , { Component } from 'react';
import classes from './summary.module.css';
import VideoModule from '../videoModule/videoModule';

class Summary extends Component {
    render(){
        return(
            <div className={classes.summary}>
                <VideoModule />
            </div>
        );
    }
}

export default Summary;