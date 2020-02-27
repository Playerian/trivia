import React, { Component } from 'react';
// import '../css/App.css';
// import components
import Answer from './Answer/Answer.jsx';
import WrongAnswer from './Answer/WrongAnswer.jsx'

class Mid extends Component {
  constructor(props){
    super(props);
  }
  responded(no){
    this.props.answerOnClick(no);
  }
  nextQuestionRequest(){
    this.props.iterateQuestion();
  }




  render() {
    let cmps =[];
    for (let i = 0;i<4;i++){
      cmps.push(<Answer cName={"answerButton" + i} no={i} data={this.props.textData[i]} respond={(no) => this.responded(no)}/>);
    }

    if(this.props.userWrongAnswer){ //either true or false  pass in correct answer...... true means wrong answer
      return (
        <div className="Mid container">
          <WrongAnswer actualAnswer={this.props.correctAnswer} nextClicked={() => this.nextQuestionRequest()}/>
        </div>
      )
    }else{
      return (
        <div className="Mid container">
          {cmps}
        </div>
      )
    }

  }
}

export default Mid;