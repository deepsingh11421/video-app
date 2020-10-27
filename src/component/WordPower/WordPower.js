import React from "react";
import classes from "./WordPower.module.css";
import Heading from "../../UI/Heading/Heading";

const WordPower = (props) => {
  var list = props.word;
  var sizes = [
    ["20px", "#45b6fe"],
    ["25px", "#3792cb"],
    ["30px", "#296d98"],
    ["35px", "#1c4966"],
    ["40px", "#0e2433"],
  ];
  var updatedlist = list.map((listKey) => {
    var randomValue = sizes[Math.floor(Math.random() * 5)];
    // console.log(randomValue);
    return (
      <span
        key={listKey[0]}
        style={{ fontSize: `${randomValue[0]}`, color: `${randomValue[1]}` }}
      >
        {" "}
        {listKey[0]}{" "}
      </span>
    );
  });

  return (
    <div className={classes.keywordCloud}>
      <Heading>Word Power</Heading>
      <div className={classes.List}>
              <div style={{ width: "40%" }}>
                  <h3>Frequently Used Words</h3>
                  {updatedlist}</div>
              <div style={{ width: "40%" }}>
                  <h3>Positive word</h3>
                  {updatedlist}</div>
      </div>
    </div>
  );
};

export default WordPower;
