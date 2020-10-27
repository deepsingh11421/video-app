import React from 'react';
import classes from './voiceEmotion.module.css';
import graph from '../../assets/image/voiceEmotion.png';

const voiceEmotion = (props) => {
    var degree;
    switch(props.emotion){
        case "angry": degree = 20;console.log(props.emotion);break;
        case "sad": degree = 65;break;
        case "neutral": degree = 115;break;
        case "happy": degree = 160;break;
        default: degree = 0;
    }

    return (
        <div className={classes.voiceEmotion}>
            <div className={classes.heading}>
                Voice Emotion
            </div>
            <div className={classes.graph}>
                <img src={graph} alt="Graph"/>
                <div className={classes.arrow} style={{transform: `rotate(${degree}deg)`}}></div>
                <div className={classes.dot}></div>
            </div>
        </div>
    )
}

export default voiceEmotion;