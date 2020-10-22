import React, {Component} from 'react';
import Summary from './container/summary/summary';
import {Route,withRouter,Switch} from 'react-router-dom';
import VideoFrame from './component/videoFrame/videoFrame';
import classes from './App.module.css';
import Navigation from './component/navigation/navigation';

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
    
    var person = [
      [
        "Person1",
        "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      ],
      [
        "Person2",
        "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      ],
      [
        "Person3",
        "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      ],
      [
        "Person4",
        "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      ],
      [
        "Person5",
        "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      ]
    ];

    var transcript = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,";

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
          <Route
            path="/"
            exact
            component={() => <Summary keywordCloud={keywordCloud} persons={person} transcript={transcript}/>}
          />
        </Switch>
        
      </div>
    );
  }
}

export default withRouter(App);
