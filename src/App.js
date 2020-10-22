import React, {Component} from 'react';
import VideoModule from './container/videoModule/videoModule';

class App extends Component {
  render() {
    return (
      <div>
        <VideoModule video_name="video_name" video_upload_time="video_upload_time" safe="true"/>
      </div>
    );
  }
}

export default App;
