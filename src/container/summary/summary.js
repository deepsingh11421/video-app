import React , { Component } from 'react';
import classes from './summary.module.css';
import VideoModule from '../videoModule/videoModule';
import KeywordCloud from '../../component/keywordCloud/keywordCloud';
import People from '../../component/People/People';
import Heading from '../../UI/Heading/Heading';
import Transcript from '../transcript/transcript';

class Summary extends Component {
    render(){
        return (
          <div className={classes.summary}>
            <VideoModule />
            <div className={classes.people}>
              <Heading>People</Heading>
              <People persons={this.props.persons} />
                </div>
            <KeywordCloud keywordCloud={this.props.keywordCloud} />
            <Transcript transcript={this.props.transcript}/>
          </div>
        );
    }
}

export default Summary;