//props main data 
import React from 'react'
import classes from './Analytics.module.css'
import "font-awesome/css/font-awesome.min.css";
import Heading from '../../UI/Heading/Heading'; 

export default function Analytics(props) {
        return (
          <div className={classes.Analytics}>
            <Heading>Analytics</Heading><br/>
            <div className={classes.head}>
              <div>Features</div>
              <div>Your assessment</div>
              <div>Benchmark case</div>
              <div>Rating</div>
            </div>
            <div className={classes.subhead}>Body Language</div>
            <div className={classes.details}>
              <div className={classes.content}>
                <div>Posture</div>
                <div>55% Casual pose & 0% fprmal Pose</div>
                <div>55% Casual pose & 0% fprmal Pose</div>
                <div>
                  <i
                    style={{ color: "lightgreen" }}
                    className="fa fa-thumbs-up"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className={classes.content}>
                <div>Posture</div>
                <div>55% Casual pose & 0% fprmal Pose</div>
                <div>55% Casual pose & 0% fprmal Pose</div>
                <div>
                  <i
                    style={{ color: "red" }}
                    className="fa fa-thumbs-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className={classes.content}>
                <div>Posture</div>
                <div>55% Casual pose & 0% fprmal Pose</div>
                <div>55% Casual pose & 0% fprmal Pose</div>
                <div>
                  <i
                    style={{ color: "lightgreen" }}
                    className="fa fa-thumbs-up"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className={classes.content}>
                <div>Posture</div>
                <div>55% Casual pose & 0% fprmal Pose</div>
                <div>55% Casual pose & 0% fprmal Pose</div>
                <div>
                  <i
                    style={{ color: "red" }}
                    className="fa fa-thumbs-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
            <div className={classes.subhead}>Facial Expression</div>
            <div>
              <div className={classes.details}>
                <div className={classes.content}>
                  <div>Posture</div>
                  <div>55% Casual pose & 0% fprmal Pose</div>
                  <div>55% Casual pose & 0% fprmal Pose</div>
                  <div>
                    <i
                      style={{ color: "lightgreen" }}
                      className="fa fa-thumbs-up"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div className={classes.content}>
                  <div>Posture</div>
                  <div>55% Casual pose & 0% fprmal Pose</div>
                  <div>55% Casual pose & 0% fprmal Pose</div>
                  <div>
                    <i
                      style={{ color: "red" }}
                      className="fa fa-thumbs-down"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div className={classes.content}>
                  <div>Posture</div>
                  <div>55% Casual pose & 0% fprmal Pose</div>
                  <div>55% Casual pose & 0% fprmal Pose</div>
                  <div>
                    <i
                      style={{ color: "lightgreen" }}
                      className="fa fa-thumbs-up"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div className={classes.content}>
                  <div>Posture</div>
                  <div>55% Casual pose & 0% fprmal Pose</div>
                  <div>55% Casual pose & 0% fprmal Pose</div>
                  <div>
                    <i
                      style={{ color: "red" }}
                      className="fa fa-thumbs-down"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
}