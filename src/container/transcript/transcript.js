import React, { Component } from 'react';
import classes from './transcript.module.css';
import Heading from '../../UI/Heading/Heading';

class Transcript extends Component {
    constructor(props){
        super(props);
        this.state = {
            transcript: this.props.transcript,
            search: ''
        }
    }

    inputHandler = (event) => {
        this.setState({
            search: event.target.value
        });
    }

    AddSpan = (content) => {
        var targetData = new RegExp(this.state.search, "g");
        var subsData = `<span>${this.state.search}</span>`;
        console.log(targetData);
        console.log(subsData);
        console.log(content);
        return content.replace(targetData,subsData);
    }

    renderAsHTML( content ){
        return(
          {__html:this.AddSpan( content ) }
        )
    }

    render() {
        var string = this.state.transcript;
        // if(this.state.search !== ''){
        //     string = string.replace(this.state.search,`<span style={{backgroundColor: 'yellow'}}>${this.state.search}</span>`);
        // }
        var result = <div className={classes.text} dangerouslySetInnerHTML={this.renderAsHTML(string)}>
                    </div>
        if(this.state.search === ''){
            result = <div className={classes.text}>{string}</div>
        }

        return (
            <div className={classes.transcript}>
                <Heading>Transcript</Heading>
                <div className={classes.search}>
                    <input type='text' placeholder="Search this transcript..." onChange={this.inputHandler} value={this.state.search}/>
                </div>
                {result}
            </div>
        );  
    }
}

export default Transcript;