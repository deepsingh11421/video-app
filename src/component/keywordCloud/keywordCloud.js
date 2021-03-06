import React from 'react';
import classes from './keywordCloud.module.css';
import Heading from '../../UI/Heading/Heading';

const keywordCloud = (props) => {
    var list = props.keywordCloud;
    var sizes = [["20px","#45b6fe"],["25px","#3792cb"],["30px","#296d98"],["35px","#1c4966"],["40px","#0e2433"]];
    var updatedlist = list.slice(0,20).map(listKey => {
        var randomValue = sizes[Math.floor(Math.random()*5)];
        
        return <span key={listKey} style={{fontSize: `${randomValue[0]}`,color: `${randomValue[1]}`}}> {listKey} </span>;
    })

    return (
        <div className={classes.keywordCloud}>
            <Heading>Keyword Cloud</Heading>
            {updatedlist}
        </div>
    );
}

export default keywordCloud;