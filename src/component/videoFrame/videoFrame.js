import React from 'react';
import classes from './videoFrame.module.css';

function videoFrame (props) {
    var safe = <button className={classes.safe}>SAFE</button>
    if(props.safe !== 'true'){
        safe = <button className={classes.danger}>NOT SAFE</button>
    }
    return (
        <div className={classes.videoContainer}>
            <video controls className={classes.videoFrame}>
                <source src={props.video_url} type="video/mp4" />
                Your browser does not support HTML video.    
            </video>
            <div className={classes.videoDescription}>
                <div className={classes.videoDetails}>
                    {props.video_name}<br />
                    {props.video_upload_time}
                </div>
                {safe}
            </div>
            <hr/>
        </div>
    );
}

export default videoFrame;