import React, {Component} from 'react';
import VideoModule from './container/videoModule/videoModule';
import People from './component/People/People';

class App extends Component {
  render() {
    return (
      <div>
        <VideoModule
          video_name="video_name"
          video_upload_time="video_upload_time"
          safe="true"
        />
        <People
          name="Jatin"
          photo="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
        />
      </div>
    );
  }
}

export default App;
