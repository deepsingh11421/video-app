import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './actionBtns.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function actionBtns (props) {
    const copyCode = (value) => {
        console.log(value);
        props.alertTrigger();
    }
    const content = props.data.buttons.map((elem,index) => {
        return(
            <div className={classes.content} key={index}>
                <div
                    className={classes.contentButton}
                    onClick={() => props.topicChanger(6)}
                >
                    <Button type={props.data.btnTheme}>{elem.btntext}</Button>
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
        )
    })

    return (
      <div className={classes.positive} style={{color: props.data.btnTheme}}>
        {props.data.actionType} <br />
        {content}
      </div>
    );
}

export default actionBtns;