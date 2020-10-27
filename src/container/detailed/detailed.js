import React, { Component } from 'react';
import classes from './detailed.module.css'; 
import People from '../../component/People/People';
import Analytics from '../../component/Analytics/Analytics';
import WordPower from '../../component/WordPower/WordPower'

class Detailed extends Component {
    render() {
        var frequentWords = [
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

        var positiveWords = [
            ["Apple", 1],
            ["Ball", 1],
            ["Cat", 1],
            ["Dog", 1],
            ["Elephant", 1],
            ["Fire", 1],
            ["Goal", 1],
            ["Hole", 1],
            ["Iran", 1],
            ["Joker", 1],
          ];

        return(
            <div className={classes.detailed}>
                <People persons={this.props.persons}/>
                <Analytics />
                <WordPower frequentWords={frequentWords} positiveWords={positiveWords}/>
            </div>
        );
    }
}

export default Detailed;