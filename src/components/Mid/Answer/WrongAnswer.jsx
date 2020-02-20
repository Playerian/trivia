import React, { Component } from 'react';
// import '../css/App.css';
// import components

class WrongAnswer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <div className="incorrectContainer">
        <div className="incorrectTop">the correct answer is: {this.props}</div>
        <div className="incorrectbot">click here for next question.</div>
      </div>
    );
  }
}

export default WrongAnswer;