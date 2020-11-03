import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import VideoFrame from '../../component/videoFrame/videoFrame';

class Shared extends Component {
    render(){
        var time;
        if(this.props.topic[this.props.match.params.topic] !== null){
            if(parseInt(this.props.match.params.topic) === this.props.topic.length-1){
                time = this.props.end - this.props.topic[parseInt(this.props.match.params.topic)].seektime;
            }else{
                time = this.props.topic[parseInt(this.props.match.params.topic)+1].seektime - this.props.topic[parseInt(this.props.match.params.topic)].seektime;
            }
        }

        return (
            <VideoFrame
                video_url={this.props.video_url}
                video_name={this.props.topic[this.props.match.params.topic].btntext}
                video_upload_time="video_upload_time"
                safe="true"
                shared={false}
                start={this.props.topic[this.props.match.params.topic].seektime}
                end={this.props.topic[this.props.match.params.topic].seektime + time}
            />
        )
    }
}

export default withRouter(Shared);