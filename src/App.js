import React, {Component} from 'react';
import Summary from './container/summary/summary';
import Detailed from './container/detailed/detailed';
import {Route,withRouter,Switch} from 'react-router-dom';
import VideoFrame from './component/videoFrame/videoFrame';
import classes from './App.module.css';
import vidFile from '../src/assets/video.mp4';
import Navigation from './component/navigation/navigation';
import Shared from './container/shared/shared';
const jsonData = require('./assets/final_json_v2.json');


class App extends Component {

  topicHandler = (time) => {
    console.log(time);
    // var tag = document.getElementById('videoTag');
    // tag.currentTime = time;
  }

  render() {
    var keywordCloud = jsonData.keywords;
    var actionBtns = jsonData.Overlay[0].actionBtns;

    var person = [];

    let i = 1;
    for (let key in jsonData.persons) {
      // console.log(jsonData.persons[key]["hero_img"]["hero_img"]);
      person.push(["person "+i++, jsonData.persons[key]["hero_img"]["hero_img"]]);
    }

    var topic = [
      {
        btntext: "Topic 1",
        seektime: 0,
      },
      {
        btntext: "Topic 2",
        seektime: 3,
      },
      {
        btntext: "Topic 3",
        seektime: 6,
      },
      {
        btntext: "Topic 4",
        seektime: 9,
      },
    ];

    console.log(jsonData.Overlay[0]["videoURL"]);

    var transcript = jsonData.video_transcript;

    var pathArray = window.location.pathname.split("/");
    var videoContent = (
      <div>
        <VideoFrame
          video_url={jsonData.Overlay[0]["videoURL"]}
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
            component={() => <Detailed persons={person} />}
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
                actionBtns={actionBtns}
              />
            )}
          />
        </Switch>
      </div>
    );
    if (pathArray[2] === "share") {
      videoContent = (
        <div>
          <Switch>
            <Route
              path="/video-app/share/:topic"
              component={() => (
                <Shared topic={topic} video_url={vidFile} start={0} end={15} />
              )}
            />
          </Switch>
        </div>
      );
    }

    return <div className={classes.app}>{videoContent}</div>;
  }
}

export default withRouter(App);
