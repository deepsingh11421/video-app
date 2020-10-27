import React from "react";
import classes from "./WordPower.module.css";
import Heading from "../../UI/Heading/Heading";
import VoiceEmotion from '../voiceEmotion/voiceEmotion';

const WordPower = (props) => {
  var frequentWords = props.frequentWords;
  var positiveWords = props.positiveWords;
  var sizes = [
    ["20px", "#f3b345"],
    ["23px", "#f8de87"],
    ["26px", "#3583d5"],
    ["29px", "#e78431"],
    ["32px", "#607178"],
    ["35px", "#87bbe2"],
    ["40px", "#2fc0af"]
  ];

  var frequentList = frequentWords.map((listKey) => {
    var randomValue = sizes[Math.floor(Math.random() * 7)];

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

  var positiveList = positiveWords.map((listKey) => {
    var randomValue = sizes[Math.floor(Math.random() * 5)];

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
    <div className={classes.WordPower}>
      <Heading>Word Power</Heading>
      <div className={classes.List}>
              <div className={classes.frequent}>
                  <p>Frequently Used Words</p>
                  {frequentList}</div>
              <div className={classes.positive}>
                  <p>Positive word</p>
                  {positiveList}</div>
              <div className={classes.voiceEmotion}>
                <VoiceEmotion emotion="happy"/>
              </div>
              <div className={classes.wpm}>
                Words Per Minute
              </div>
      </div>
    </div>
  );
};

export default WordPower;
