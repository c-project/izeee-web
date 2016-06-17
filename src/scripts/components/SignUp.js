'use strict';

import React from 'react';
import Router from 'react-router';
import mui from 'material-ui';

var Link = Router.Link,
    Paper = mui.Paper,
    Step = mui.Stepper,
    Stepper = mui.Stepper,
    StepLabel = mui.Stepper,
    RaisedButton = mui.RaisedButton,
    FlatButton = mui.FlatButton,
    TextField = mui.TextField;

class SignUp extends React.Component {
  // state = {
  //   finished: false,
  //   stepIndex: 0,
  // };

  // handleNext = () => {
  //   const {stepIndex} = this.state;
  //   this.setState({
  //     stepIndex: stepIndex + 1,
  //     finished: stepIndex >= 2,
  //   });
  // };
  //
  // handlePrev = () => {
  //   const {stepIndex} = this.state;
  //   if (stepIndex > 0) {
  //     this.setState({stepIndex: stepIndex - 1});
  //   }
  // };
  //
  // getStepContent(stepIndex) {
  //   switch (stepIndex) {
  //     case 0:
  //       return 'Select campaign settings...';
  //     case 1:
  //       return 'What is an ad group anyways?';
  //     case 2:
  //       return 'This is the bit I really care about!';
  //     default:
  //       return 'You\'re a long way from home sonny jim!';
  //   }
  // }
  //
  // render() {
  //   // const {finished, stepIndex} = this.state;
  //   // const contentStyle = {margin: '0 16px'};
  //
  //   return (
  //     <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
  //       <Stepper activeStep="0">
  //         <Step>
  //           <StepLabel>Select campaign settings</StepLabel>
  //         </Step>
  //         <Step>
  //           <StepLabel>Create an ad group</StepLabel>
  //         </Step>
  //         <Step>
  //           <StepLabel>Create an ad</StepLabel>
  //         </Step>
  //       </Stepper>
  //       <div>
  //   );
  // }
  render() {
    return (
          <div>
            <Stepper>
              <Step>
                <StepLabel>Select campaign settings</StepLabel>
              </Step>
              <Step>
                <StepLabel>Create an ad group</StepLabel>
              </Step>
              <Step>
                <StepLabel>Create an ad</StepLabel>
              </Step>
            </Stepper>
            </div>
    );
  }
}

module.exports = SignUp;
// export SignUp;
