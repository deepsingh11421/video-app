import React, {Component} from 'react';
import classes from './videoFrame.module.css';

class VideoFrame extends Component {
    componentDidMount(){
        var tag = document.getElementById("videoTag");
        tag.currentTime = this.props.start;
    }

    render(){
        var safe = <button className={classes.safe}>SAFE</button>
        if(this.props.safe !== 'true'){
            safe = <button className={classes.danger}>NOT SAFE</button>
        }

        const showData = () => {
            var tag = document.getElementById("videoTag");
            console.log(tag.duration); 
        }

        const vidPlay = () => {
            var tag = document.getElementById("videoTag");
            tag.play();
        }
        const vidPause = () => {
            var tag = document.getElementById("videoTag");
            tag.pause();
        }
        const updatedAlert = () => {
            var tag = document.getElementById("videoTag");
            if(tag.currentTime > this.props.end || tag.currentTime < this.props.start){
                tag.currentTime = this.props.start;
                tag.pause();
            }
        }
        return (
            <div className={classes.videoContainer}>
                <video controls onClick={showData} onTimeUpdate={updatedAlert} id="videoTag" className={classes.videoFrame}>
                    <source src={this.props.video_url} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
                <button onClick={vidPlay}>Play</button><button onClick={vidPause}>Pause</button>
                <div className={classes.videoDescription}>
                    <div className={classes.videoDetails}>
                        {this.props.video_name}<br />
                        {this.props.video_upload_time}
                    </div>
                    {safe}
                </div>
                <hr/>
            </div>
        );
    }
}

export default VideoFrame;