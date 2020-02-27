import React, { Component } from 'react';
//components
import QuestionNo from './QuestionNo.jsx';
import TopFiller from './TopFiller.jsx';
import Timer from './Timer.jsx';

class Top extends Component {

  render() {
    return (
      <div className="TopTop">
        <QuestionNo qNum={this.props.qNum}/>
        <TopFiller/>
        <Timer time={this.props.time}/>
      </div>
    );
  }
}

export default Top;