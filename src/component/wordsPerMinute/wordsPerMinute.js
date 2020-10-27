import React from 'react';
import classes from './wordsPerMinute.module.css';
import graph from '../../assets/image/wpm.jpg';

const wordsPerMinute = (props) => {
    var percent = props.words/350*100;
    var degree = percent*1.8;

    return (
        <div className={classes.wpm}>
            <div className={classes.heading}>
                Words Per Minute (WPA)
            </div>
            <div className={classes.graph}>
                <img src={graph} alt="Graph"/>
                <div className={classes.arrow} style={{transform: `rotate(${degree}deg)`}}></div>
                <div className={classes.dot}></div>
                <div className={classes.container}>
                <div className={classes.words}>{props.words}</div>
                </div>
            </div>
        </div>
    );
}

export default wordsPerMinute;