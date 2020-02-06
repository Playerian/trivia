import React, { Component } from 'react';
import '../css/App.css';
// import components
import Top from './Top/Top.jsx';
import Mid from './Mid/Mid.jsx';
import Bottom from './Bottom/Bottom.jsx';
//import firebase 
import {buildFirebase} from '../clients/firebase.js';
import {getRandomQuestion} from '../clients/firebase.js';


//https://studio-trivia-db.firebaseapp.com/

//app class
class App extends Component {
  constructor(props){
    super(props);
    let document = this;
    //get question fom fie base
    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(function(data) {
    const questions = data.val();
    // Do something with the questions
      console.log(questions)
      document.setState({fetched: true});
      for (let i = 0; i < questions.length;i++ ){
        let qClass = new Question(
          questions[i].question_text,
          questions[i].choices,
          questions[i].correct_choice_index
        );
        document.state.QuestionList.push(qClass);
        document.iterateQuestion();
        document.changeRenderText();
      }
    });


    //set state
    this.state = {
      //variables
      currentIndex: -1,
      currentQ: {},
      QuestionList: [],
      fetched: false,
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
  changeRenderText(){
    this.state.answerBoxText = this.state.QuestionList[this.state.currentIndex].question;
    this.state.answerBoxText = this.state.QuestionList[this.state.currentIndex].answerChoice;
  }
  iterateQuestion(){
    let index = this.state.currentIndex;
    index += 1;
    if (index >= this.state.QuestionList.length){
      index = 0;
    }
    this.setState({currentIndex: index});
    console.log(index);
  }
  
  render() {
    if (this.state.currentIndex === -1){
      return (
        <div className="app">
          <Top questionText={this.state.questionText}/>
          <Mid answerOnClick={this.answerOnClick}  textData={this.state.answerBoxText}/>
          <Bottom />
        </div>
      );
    }else{
      return (
        <div className="app">
          <Top questionText={this.state.questionText}/>
          <Mid answerOnClick={this.answerOnClick}  textData={this.state.answerBoxText}/>
          <Bottom />
        </div>
      );
    }
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

// //
// class fakeFirebaseImport(){
//   constructor(){
    
//   }
// }
// //
// class getRandomQuestion{
//   constructor(questions){
//     var keys = Object.keys(questions)
//     const randomIndex = Math.floor(Math.random() * keys.length);
//     return questions[keys[randomIndex]];
//   }
  
// }