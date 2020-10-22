import React from 'react'
import classes from './People.module.css';
import Person from './Person/Person';
export default function People(props) {
  var list = props.persons;
  //console.log(list);  
  var personList = list.map((listKey) => {
    console.log(listKey);
    return <Person avatar={listKey[1]} person={listKey[0]}/>;
  });  

  return (
      <div className={classes.People}>
        <div className={classes.log}>
          {personList}
        </div>
      </div>
    );
}
