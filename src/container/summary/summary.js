import React , { Component } from 'react';
import classes from './summary.module.css';
import VideoModule from '../videoModule/videoModule';
import KeywordCloud from '../../component/keywordCloud/keywordCloud';
import People from '../../component/People/People';

class Summary extends Component {
    render(){
        return(
            <div className={classes.summary}>
                <VideoModule />
                <People />
                <KeywordCloud keywordCloud={this.props.keywordCloud}/>
            </div>
        );
    }
}

export default Summary;