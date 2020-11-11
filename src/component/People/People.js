import React from 'react'
import classes from './People.module.css';
import Person from './Person/Person';

const People = (props) => {
  var list = props.persons;
  console.log(props.persons);
  var personList = list.map((listKey) => {
    return <Person key={listKey[0]} avatar={listKey[1]} person={listKey[0]}/>;
  });  

  return (
      <div className={classes.People}>
        <div className={classes.log}>
          {personList}
        </div>
      </div>
    );
}

export default People;
