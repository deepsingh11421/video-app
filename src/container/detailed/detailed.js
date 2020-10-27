import React, { Component } from 'react';
import classes from './detailed.module.css'; 
import People from '../../component/People/People';
import Analytics from '../../component/Analytics/Analytics';
import WordPower from '../../component/WordPower/WordPower'

class Detailed extends Component {
    render() {
        var word = [
          ["germany", 1],
          ["states", 1],
          ["said", 1],
          ["rosen", 1],
          ["united", 1],
          ["rate", 1],
          ["used", 1],
          ["family", 1],
          ["nazi", 1],
          ["last", 1],
        ];

        return(
            <div className={classes.detailed}>
                <People persons={this.props.persons}/>
                <Analytics />
                <WordPower word={word}/>
            </div>
        );
    }
}

export default Detailed;