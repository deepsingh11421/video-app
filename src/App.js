import React, {Component} from 'react';
import VideoModule from './container/videoModule/videoModule';
import People from './component/People/People';

class App extends Component {
  render() {
    return (
      <div>
        <VideoModule />
        <People />
      </div>
    );
  }
}

export default App;
