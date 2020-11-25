import React , {Component} from 'react';
import classes from './videoModule.module.css';
// import TableOfContent from '../../component/tableOfContent/tableOfContent';
import ActionBtns from '../../component/actionBtns/actionBtns';

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
        var actionBtns = this.props.actionBtns.map((elem,index) => {
          return (
            <ActionBtns 
              alertTrigger={this.alertTrigger}
              topicChanger={this.props.topicChanger}
              data={elem}
              key={index}
          />
          )
        });
        var alert = [classes.alert];
        if(this.state.copyAlert){
            alert.push(classes.show);
      }
      
        alert = alert.join(' ');

        return (
          <div className={classes.videoModule}>
            <div className={alert}>
              <div className={classes.alertText}>Code Copied!</div>
            </div>

            <div className={classes.function}>
              {/* <TableOfContent
                alertTrigger={this.alertTrigger}
                topicChanger={this.props.topicChanger}
              /> */}
              {actionBtns}
            </div>
          </div>
        );
    }
}

export default videoModule;