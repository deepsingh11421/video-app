import React from 'react';
import classes from './tableOfContent.module.css';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

function tableOfContent (props) {
    const copyCode = (value) => {
        // console.log(value);
        // // 'http://deepsingh11421.github.io/video-app/share/0'
        // navigator.clipboard.writeText('http://deepsingh11421.github.io/video-app/share/'+value);
        // props.alertTrigger();
        var textArea = document.createElement("textarea");
        // textArea.value = 'http://localhost:3000/video-app/share/'+value;
        textArea.value = 'http://deepsingh11421.github.io/video-app/share/'+value;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        props.alertTrigger();
        document.body.removeChild(textArea);
    }

    return (
        <div className={classes.tableOfContent}>
            TABLE OF CONTENT<br/>
            <div className={classes.content}>
                <div className={classes.contentButton} onClick={() => props.topicChanger(3)}>
                    <Button type="purple">Topic 1</Button>
                </div>
                <div className={classes.sideMenu}>
                    <div onClick={() => copyCode(0)}>
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
                    <div onClick={() => copyCode(1)}>
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
                    <div onClick={() => copyCode(3)}>
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

export default withRouter(tableOfContent);