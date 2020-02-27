import React, { Component } from 'react';
// import '../css/App.css';
// import components

class QuestionNo extends Component {

  render() {
    return (
      <div className="QuestionNo" title="Question number">
        <div>{this.props.qNum || Infinity}</div>
      </div>
    );
  }
}

export default QuestionNo;