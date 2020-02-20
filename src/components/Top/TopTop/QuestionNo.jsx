import React, { Component } from 'react';
// import '../css/App.css';
// import components

class QuestionNo extends Component {

  render() {
    return (
      <div className="QuestionNo">
        {this.props.qNum || Infinity}
      </div>
    );
  }
}

export default QuestionNo;