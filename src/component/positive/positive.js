import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './positive.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function positive (props) {
    const copyCode = (value) => {
        console.log(value);
        props.alertTrigger();
    }

    return (
        <div className={classes.positive}>
            POSITIVE <br/>
            <div className={classes.content}>
                <div className={classes.contentButton}>
                    <Button type="green">Hand Move</Button>
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
        </div>
    );
}

export default positive;