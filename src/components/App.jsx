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
    //get question fom fire base
    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(function(data) {
    console.log(data);
    const questions = data.val();
    // Do something with the questions
      console.log(questions)
      document.setState({fetched: true});
      //query questions into objects
      let newList = [];
      for (let key in questions){
        let qClass = new Question(
          questions[key].question_text,
          questions[key].choices,
          questions[key].correct_choice_index
        );
        //shuffle answer choices and index
        let correctChoice = qClass.answerChoice[qClass.answerIndex];
        let oldList = qClass.answerChoice;
        let nList = [];
        while(oldList.length > 0){
          //shuffle choices
          let index = document.randomInt(0, oldList.length - 1);
          let removingObj = oldList[index];
          oldList.splice(index, 1);
          nList.push(removingObj);
        }
        qClass.answerChoice = nList;
        qClass.correct_choice_index = qClass.answerChoice.indexOf(correctChoice);
        qClass.answerIndex = qClass.correct_choice_index;
        //document.state.QuestionList.push(qClass);
        newList.push(qClass);
        
      }
      //shuffle qList
      let qList = [];
      while (newList.length > 0){
        let index = document.randomInt(0, newList.length - 1);
        let removingObj = newList[index];
        newList.splice(index, 1);
        qList.push(removingObj);
      }
      console.log("consoling qList");
      console.log(qList)
      document.setState({totalQ: qList.length});
      document.setState({QuestionList: qList}, () => {
        document.iterateQuestion();
      });
    });


    //set state
    this.state = {
      //variables
      currentIndex: 0,
      currentQ: {},
      totalQ: 0,
      QuestionList: [],
      fetched: false,
      userWrongAnswer: false,
      //rendering
      answerBoxText: ["Empty", "Empty", "Empty2", "Empty"], //<-change to change answer.text
      questionText: "methink drown bliindsaddaw dumb, no more drowning you hear me. im changed. put money in thy purse. I am not who I am??????????????????????? PROSANA (._.)7/"
    };
  }
  //misc fun
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  //real method
  renderQuestion(){
    let q = this.state.QuestionList[this.state.currentIndex]
    if (q){
      // this.state.questionText = q.getQuestion();
      this.setState({questionText: q.getQuestion()});
      // this.state.answerBoxText = q.getAnswer();
      this.setState({answerBoxText: q.getAnswer()});
      // this.state.currentQ = q;
      this.setState({currentQ: q});
    }
  }
  //functions
  answerOnClick(no){
    console.log(`app has recieveed ${no}`)
    //this.iterateQuestion()
    let question = this.state.currentQ;
    console.log("[][][][][][]")
    console.log(question);

    if(question.answerIndex === no){
      //if answer correct----------------------


      this.iterateQuestion()

    }else{
      this.setState({userWrongAnswer:true})
    }

  }
  changeRenderText(){
    //this.state.answerBoxText = this.state.QuestionList[this.state.currentIndex].question;
    //this.state.answerBoxText = this.state.QuestionList[this.state.currentIndex].answerChoice;
    // console.log("wwwwwwwwww")
    // console.log(this.state.QuestionList)
    // console.log(this.state.currentIndex)
    this.setState({questionText : this.state.QuestionList[this.state.currentIndex].question});
    this.setState({answerBoxText : this.state.QuestionList[this.state.currentIndex].answerChoice})
  }
  iterateQuestion(){
    let index = this.state.currentIndex;
    index += 1;
    if (index >= this.state.QuestionList.length){
      index = 0;
    }
    this.setState({currentIndex: index});
    this.setState({currentQ: this.state.QuestionList[this.state.currentIndex]})
    console.log(index);
    this.changeRenderText();
  }

  render() {
    console.log(this.state);
    return (
      <div className="app"> 
        <Top qNum={this.state.currentIndex} questionText={this.state.questionText}/>
        <Mid answerOnClick={(no) => this.answerOnClick(no)}  textData={this.state.answerBoxText} isWrong={this.state.userWrongAnswer} correctAnswer={this.state.currentQ.getAnswer ? this.state.currentQ.getAnswer() : "doesnt exist"}/>
        <Bottom/>
      </div>
    );
  }
}

export default App;

//other class?
class Question {
  constructor(question, answerChoice, answerIndex){
    this.question = typeof question === "string" ? question : "question is not string" ; //Array.isArray(question) ? question : [];
    this.answerChoice = Array.isArray(answerChoice) ? answerChoice : ["undefined", "undefined", "undefined", "undefined"];
    this.answerIndex = typeof answerIndex === 'number' ? answerIndex : NaN;
  }    
  getAnswer(){
    return this.answer ? this.answer : null;
  }
  checkAnswer(choice){
    return this.answerChoice[this.answerIndex] || null;
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