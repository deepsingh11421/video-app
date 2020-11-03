import React, {Component} from 'react';
import Summary from './container/summary/summary';
import Detailed from './container/detailed/detailed';
import {Route,withRouter,Switch} from 'react-router-dom';
import VideoFrame from './component/videoFrame/videoFrame';
import classes from './App.module.css';
import vidFile from '../src/assets/video.mp4';
import Navigation from './component/navigation/navigation';
import Shared from './container/shared/shared';


class App extends Component {

  topicHandler = (time) => {
    var tag = document.getElementById('videoTag');
    tag.currentTime = time;
  }

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
        "https://www.sina.pk/wp-content/uploads/2017/11/dummy-dp.png",
      ],
      [
        "Person2",
        "https://www.sina.pk/wp-content/uploads/2017/11/dummy-dp.png",
      ],
      [
        "Person3",
        "https://www.sina.pk/wp-content/uploads/2017/11/dummy-dp.png",
      ],
      [
        "Person4",
        "https://www.sina.pk/wp-content/uploads/2017/11/dummy-dp.png",
      ],
      [
        "Person5",
        "https://www.sina.pk/wp-content/uploads/2017/11/dummy-dp.png",
      ],
      [
        "Person6",
        "https://www.sina.pk/wp-content/uploads/2017/11/dummy-dp.png",
      ],
    ];

    var topic = [{
        "btntext": "Topic 1",
        "seektime": 0
    }, {
        "btntext": "Topic 2",
        "seektime": 3
    }, {
        "btntext": "Topic 3",
        "seektime": 6
    }, {
        "btntext": "Topic 4",
        "seektime": 9
    }];

    var transcript = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,";
    
    var pathArray = window.location.pathname.split('/');
    var videoContent = (
      <div>
        <VideoFrame
          video_url={vidFile}
          video_name="video_name"
          video_upload_time="video_upload_time"
          safe="true"
          start={0}
          end={15}
        />
        <Navigation />
        <Switch>
          <Route
            path="/video-app/detailed"
            component={() => <Detailed persons={person}/>}
          />
          <Route
            path="/video-app/"
            exact
            component={() => (
              <Summary
                keywordCloud={keywordCloud}
                persons={person}
                transcript={transcript}
                topicChanger={this.topicHandler}
              />
            )}
          />
        </Switch>
      </div>
    )
    if(pathArray[2] === 'share'){
      videoContent = (
        <div>
          <Switch>
            <Route 
              path='/video-app/share/:topic'
              component={() => <Shared topic={topic} video_url={vidFile} start={0} end={15}/>}
            />
          </Switch>
        </div>
      );
    }
  
    return (
      <div className={classes.app}>
        {videoContent}
      </div>
    );
  }
}

export default withRouter(App);
