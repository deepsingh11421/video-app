import React from 'react';
import classes from './tableOfContent.module.css';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function tableOfContent (props) {
    const copyCode = (value) => {
        console.log(value);
        props.alertTrigger();
    }

    return (
        <div className={classes.tableOfContent}>
            TABLE OF CONTENT<br/>
            <div className={classes.content}>
                <div className={classes.contentButton} onClick={() => props.topicChanger(3)}>
                    <Button type="purple">Topic 1</Button>
                </div>
                <div className={classes.sideMenu}>
                    <div onClick={() => copyCode(1)}>
                        <FontAwesomeIcon icon={ faFileCode }/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={ faShareAlt }/>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.contentButton} onClick={() => props.topicChanger(6)}>
                    <Button type="purple">Topic 2</Button>
                </div>
                <div className={classes.sideMenu}>
                    <div onClick={() => copyCode(2)}>
                        <FontAwesomeIcon icon={ faFileCode }/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={ faShareAlt }/>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.contentButton} onClick={() => props.topicChanger(9)}>
                    <Button type="purple">Topic 3</Button>
                </div>
                <div className={classes.sideMenu}>
                    <div onClick={() => copyCode(3)}>
                        <FontAwesomeIcon icon={ faFileCode }/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={ faShareAlt }/>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.contentButton} onClick={() => props.topicChanger(12)}>
                    <Button type="purple">Topic 4</Button>
                </div>
                <div className={classes.sideMenu}>
                    <div onClick={() => copyCode(4)}>
                        <FontAwesomeIcon icon={ faFileCode }/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={ faShareAlt }/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default tableOfContent;