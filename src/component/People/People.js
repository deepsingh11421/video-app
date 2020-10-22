import React from 'react'
import classes from './People.module.css';
import Person from './Person/Person';
import Heading from '../../UI/Heading/Heading';

const People = (props) => {
  var list = props.persons;
  var personList = list.map((listKey) => {
    console.log(listKey);
    return <Person avatar={listKey[1]} person={listKey[0]}/>;
  });  

  return (
      <div className={classes.People}>
        {/* <Heading>People</Heading> */}
        <div className={classes.log}>
          {personList}
        </div>
      </div>
    );
}

export default People;
