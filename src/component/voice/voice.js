import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './voice.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function voice (props) {
    const copyCode = (value) => {
        console.log(value);
        props.alertTrigger();
    }

    return (
      <div className={classes.voice}>
        VOICE <br />
        <div className={classes.content}>
          <div
            className={classes.contentButton}
            onClick={() => props.topicChanger(3)}
          >
            <Button type="black">Gratitude:1</Button>
          </div>
          <div className={classes.sideMenu}>
            <div onClick={() => copyCode(1)}>
              <FontAwesomeIcon icon={faFileCode} />
            </div>
            <div>
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div
            className={classes.contentButton}
            onClick={() => props.topicChanger(7)}
          >
            <Button type="black">Question:1</Button>
          </div>
          <div className={classes.sideMenu}>
            <div onClick={() => copyCode(1)}>
              <FontAwesomeIcon icon={faFileCode} />
            </div>
            <div>
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.contentButton} onClick={() => props.topicChanger(10)}>
            <Button type="black">
              Question:2
            </Button>
          </div>
          <div className={classes.sideMenu}>
            <div onClick={() => copyCode(1)}>
              <FontAwesomeIcon icon={faFileCode} />
            </div>
            <div>
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default voice;