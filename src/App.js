import React, {Component} from 'react';
import Summary from './container/summary/summary';
import {Route,withRouter,Switch} from 'react-router-dom';
import VideoFrame from './component/videoFrame/videoFrame';
import classes from './App.module.css';
import Navigation from './component/navigation/navigation';
import People from './component/People/People';

class App extends Component {
  render() {
    var keywordCloud = [
          ["germany", 1],
          ["states", 1],
          ["said", 1],
          ["rosen", 1],
          ["united", 1],
          ["rate", 1],
          ["used", 1],
          ["family", 1],
          ["nazi", 1],
          ["last", 1]
      ];

    return (
      <div className={classes.app}>
        <VideoFrame
          video_url="https://thinkific-impor.s3.amazonaws.com/244040/0lwDEoNOQ6qYA41x3TK6_output8.m4v"
          video_name="video_name"
          video_upload_time="video_upload_time"
          safe="true"
        />
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Summary keywordCloud={keywordCloud}/>} /> 
        </Switch>
        <People
          name="jatin"
          photo="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
      </div>
    );
  }
}

export default withRouter(App);
