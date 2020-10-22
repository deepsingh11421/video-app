import React , {Component} from 'react';
import classes from './videoModule.module.css';
import TableOfContent from '../../component/tableOfContent/tableOfContent';
import Positive from '../../component/positive/positive';
import Negative from '../../component/negative/negative';
import Voice from '../../component/voice/voice';
import Custom from '../../component/custom/custom';

class videoModule extends Component {
    state={
        copyAlert: false,
        alertID: null
    }

    ClearAllIntervals = () => {
        if(this.state.alertID !== null){
            clearInterval(this.state.alertID);
        }
    }

    checkAlert = () => {
        var curr = this.state.copyAlert;
        if(curr){
            this.setState({copyAlert: !curr});
        }
        this.setState({alertID: null});
    }

    alertTrigger = () => {
        this.ClearAllIntervals();
        var curr = this.state.copyAlert;
        if(!this.state.copyAlert){
            this.setState({copyAlert: !curr});
        }
        var timeID = setTimeout(this.checkAlert,3000);
        this.setState({alertID: timeID});
    }

    render() {
        var alert = [classes.alert];
        if(this.state.copyAlert){
            alert.push(classes.show);
        }
        alert = alert.join(' ');

        return (
            <div className={classes.videoModule}>
                <div className={alert}>
                    <div className={classes.alertText}>
                        Code Copied!
                    </div>
                </div>
                
                <div className={classes.function}>
                    <TableOfContent alertTrigger={this.alertTrigger}/>
                    <Positive alertTrigger={this.alertTrigger}/>
                    <Negative alertTrigger={this.alertTrigger}/>
                    <Voice alertTrigger={this.alertTrigger}/>
                    <Custom />
                </div>
            </div>
        );
    }
}

export default videoModule;