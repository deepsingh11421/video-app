import React, {Component} from 'react';
import classes from './videoFrame.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faPause } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class VideoFrame extends Component {
    state = {}

    constructor(props){
        super(props);
        
        var time = this.props.end - this.props.start;
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor((time % 3600) / 60);
        var seconds = time % 60;
        if(seconds < 10){
            seconds = '0'+seconds;
        }
        var endTime;
        var startTime;
        if(hours>0){
            if(hours<10){
                hours = '0'+hours;
                
            }
            if(minutes < 10){
                minutes = '0'+minutes;
            }
            endTime = hours+':'+minutes+':'+seconds;
            startTime = '0:00:00';
        }else{
            endTime = minutes+':'+seconds;
            startTime = '0:00';
        }
        this.state = {
            paused: true,
    Time: startTime,
            endTime: endTime
        }
    }

    componentDidMount(){
        var tag = document.getElementById("videoTag");
        tag.currentTime = this.props.start;
    }

    render(){
        var safe = <button className={classes.safe}>SAFE</button>
        if(this.props.safe !== 'true'){
            safe = <button className={classes.danger}>NOT SAFE</button>
        }

        const vidPlay = () => {
            var tag = document.getElementById("videoTag");
            if(tag.paused){
                tag.play();
                this.setState({paused: false});
            }else{
                tag.pause();
                this.setState({paused: true});
            }
        }
        const updatedAlert = () => {
            var tag = document.getElementById("videoTag");
            if(tag.currentTime > this.props.end || tag.currentTime < this.props.start){
                tag.currentTime = this.props.start;
                tag.pause();
                this.setState({paused: true})
            }
            var curr = tag.currentTime - this.props.start;
            var total = this.props.end - this.props.start;
            var percent = curr/total *100;
            var progress = document.getElementById("progress");
            progress.style.width = `${percent}%`;
            //Current Time to clock
            var hours = Math.floor(curr / 3600);
            var minutes = Math.floor((curr % 3600) / 60);
            var seconds = Math.floor(curr % 60);
            if(seconds<10){
                seconds = '0'+seconds;
            }
            if(hours>0){
                if(minutes<10){
                    minutes = '0'+minutes;
                }
                this.setState({currTime: hours+':'+minutes+':'+seconds});
            }else{
                this.setState({currTime: minutes+':'+seconds});
            }
            
        }
        const progressChange = (event) => {
            var total = this.props.end - this.props.start;
            var tag = document.getElementById("videoTag");
            var x = event.clientX;
            var parent = document.getElementById("progressBar");
            var length = parent.getBoundingClientRect().right - parent.getBoundingClientRect().left;
            var clickDist = x - parent.getBoundingClientRect().left; 
            var progressPercent = clickDist/length*100;
            var skipTime = progressPercent*total/100;
            tag.currentTime = this.props.start + skipTime;
        }

        var playBtn = <button onClick={vidPlay} className={classes.controlPlay}><FontAwesomeIcon icon={ faPause }/></button>;
        if(this.state.paused) {
            playBtn = <button onClick={vidPlay} className={classes.controlPlay}><FontAwesomeIcon icon={ faPlay }/></button>
        }

        return (
            <div className={classes.videoContainer}>
                <video onTimeUpdate={updatedAlert} id="videoTag" onClick={vidPlay} className={classes.videoFrame}>
                    <source src={this.props.video_url} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
                <div className={classes.controls}>
                    <div className={classes.controlList}>
                        {playBtn}
                        <div id="duration" className={classes.controlDuration}>
                            {this.state.currTime}/{this.state.endTime}
                        </div>
                    </div>
                    <div id="progressBar" className={classes.progressBar} onClick={progressChange}>
                        <div id="progress" className={classes.progress}>
                            <div className={classes.dotPosition}>
                                <div className={classes.progressDot}>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default withRouter(VideoFrame);