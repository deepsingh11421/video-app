import React from 'react'
import classes from './People.module.css';
import Person from './Person/Person';

const People = (props) => {
  var list = props.persons;
<<<<<<< HEAD
  console.log(props.persons);
  var personList = list.map((listKey) => {
    return <Person key={listKey[0]} avatar={listKey[1]} person={listKey[0]}/>;
=======
  var personList = list.map((listKey, index) => {
    if (index === props.active) {
      return (
        <Person
          handler={props.handler}
          active={true}
          key={index}
          index={index}
          avatar={listKey[1]}
          person={listKey[0]}
        />
      );
    } else {
            return (
              <Person
                handler={props.handler}
                active={false}
                key={index}
                index={index}
                avatar={listKey[1]}
                person={listKey[0]}
              />
            );
    }
    
>>>>>>> b8bd255631cebbb162b4f978ca64bb254caac156
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
