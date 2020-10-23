import React, { Component } from 'react';
import classes from './detailed.module.css'; 
import People from '../../component/People/People';
import Analytics from '../../component/Analytics/Analytics';

class Detailed extends Component {
    render(){
        return(
            <div className={classes.detailed}>
                <People persons={this.props.persons}/>
                <Analytics />
            </div>
        );
    }
}

export default Detailed;