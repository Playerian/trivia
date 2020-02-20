import React, { Component } from 'react';
// import '../css/App.css';
// import components
import Answer from './Answer/Answer.jsx';
import WrongAnswer from './Answer/WrongAnswer.jsx'

class Mid extends Component {
  constructor(props){
    super(props);
  }
ss
  responded(no){
    console.log(`${no} has called!`);
    this.props.answerOnClick(no);
  }





  render() {
    let cmps =[];
    for (let i = 0;i<4;i++){
      cmps.push(<Answer no={i} data={this.props.textData[i]} respond={(no) => this.responded(no)}/>);
    }

    if(this.props.WrongAnswer){ //either true or false  pass in correct answer......
      return (
        <div className="Mid container">
          <WrongAnswer actualAnswer={this.props.correctAnswer} />
        </div>
      )
    }else{
      return (
        <div className="Mid container">
          {cmps};
        </div>
      )
    }

  }
}

export default Mid;