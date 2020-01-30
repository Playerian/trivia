import React, { Component } from 'react';
import '../css/App.css';
// import components
import Top from './Top/Top.jsx';
import Mid from './Mid/Mid.jsx';
import Bottom from './Bottom/Bottom.jsx';
//https://studio-trivia-db.firebaseapp.com/

//app class
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //variables
      currentIndex: 0,
      currentQ: {},
      QuestionList: [],
      //rendering
      answerBoxText: ["Empty", "Empty", "Empty2", "Empty"], //<-change to change answer.text
      questionText: "methink drown bliindsaddaw dumb, no more drowning you hear me. im changed. put money in thy purse. I am not who I am??????????????????????? PROSANA (._.)7/"
    };
  }
  renderQuestion(){
    let q = this.state.QuestionList[this.state.currentIndex]
    if (q){
      this.state.questionText = q.getQuestion();
      this.state.answerBoxText = q.getAnswer();
      this.state.currentQ = q;
    }
  }
  //functions
  answerOnClick(no){
    console.log(`app has recieveed ${no}`)
  }
  render() {
    return (
      <div className="app">
        <Top questionText={this.state.questionText}/>
        <Mid answerOnClick={this.answerOnClick}  textData={this.state.answerBoxText}/>
        <Bottom />
      </div>
    );
  }
}
export default App;

//other class?
class Question {
  constructor(question, answerChoice, answerIndex){
    this.question = Array.isArray(question) ? question : [];
    this.answerChoice = Array.isArray(answerChoice) ? answerChoice : [];
    this.answerIndex = typeof answerIndex === 'number' ? answerIndex : NaN;
  }    
  getAnswer(){
    return this.answer ? this.answer : null;
  }
  checkAnswer(choice){
    return this.answerChoice === choice;
  }
  getQuestion(){
    return this.question ? this.question : null
  }
  
}
