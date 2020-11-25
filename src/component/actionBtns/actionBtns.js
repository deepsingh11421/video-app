import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './actionBtns.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function actionBtns (props) {
    const copyCode = (value) => {
        // console.log(value);
        // // 'http://deepsingh11421.github.io/video-app/share/0'
        // navigator.clipboard.writeText('http://deepsingh11421.github.io/video-app/share/'+value);
        // props.alertTrigger();
        var textArea = document.createElement("textarea");
        textArea.value = 'http://localhost:3000/video-app/share/'+value;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        props.alertTrigger();
        document.body.removeChild(textArea);
    }

    var content;
    if(props.data.actionType === 'Insights'){
        console.log(props.data);
        content = props.data.buttons.map((elem,index) => {

            return(
                <div className={classes.content} key={index}>
                    <div
                        className={classes.contentButton}
                        onClick={() => props.topicChanger(elem.seektime)}
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
    }else{
        content = props.data.buttons.map((elem,index) => {

            return(
                <div className={classes.content} key={index}>
                    <div
                        className={classes.contentButton}
                        onClick={() => props.topicChanger(6)}
                    >
                        <Button type={props.data.btnTheme}>{elem.btntext}</Button>
                    </div>
                    {/* <div className={classes.sideMenu}>
                        <div onClick={() => copyCode(1)}>
                        <FontAwesomeIcon icon={faFileCode} />
                        </div>
                        <div>
                        <FontAwesomeIcon icon={faShareAlt} />
                        </div>
                    </div> */}
                </div>
            )
        })
    }

    return (
      <div className={classes.positive} style={{color: props.data.btnTheme}}>
        {props.data.actionType} <br />
        {content}
      </div>
    );
}

export default actionBtns;