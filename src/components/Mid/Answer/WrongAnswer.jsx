import React, { Component } from 'react';
// import '../css/App.css';
// import components

class WrongAnswer extends Component {
  constructor(props){
    super(props);
  }

nextQuestion(){
  this.props.nextClicked();
}

  
  render() {
    return (
      <div className="incorrectContainer">
        <div className="incorrectTitle">Sorry, the answer you picked is wrong</div>
        <div className="incorrectTop">the correct answer is: {this.props.actualAnswer}</div>
        <div className="incorrectbot" onClick={()=>this.nextQuestion()}>click here for next question.</div>
      </div>
    );
  }
}

export default WrongAnswer;