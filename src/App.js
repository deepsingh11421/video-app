import React, {Component} from 'react';
import Summary from './container/summary/summary';
import {Route,withRouter,Switch} from 'react-router-dom';
import VideoFrame from './component/videoFrame/videoFrame';
import classes from './App.module.css';
import Navigation from './component/navigation/navigation';

class App extends Component {
  render() {
    return (
      <div className={classes.app}>
        <VideoFrame video_url="https://thinkific-impor.s3.amazonaws.com/244040/0lwDEoNOQ6qYA41x3TK6_output8.m4v" video_name="video_name" video_upload_time="video_upload_time" safe="true"/>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Summary} /> 
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
