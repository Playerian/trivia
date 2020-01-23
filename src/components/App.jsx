import React, { Component } from 'react';
import '../css/App.css';
// import components
import Top from './Top/Top.jsx';
import Mid from './Mid/Mid.jsx';
import Bottom from './Bottom/Bottom.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //variables
      currentQ: 1,
      QuestionList: [],
      Answer: [],
    };
  }
  //functions
  answerOnClick(no){
    console.log(`app has recieveed ${no}`)
  }
  render() {
    return (
      <div className="app">
        <Top/>
        <Mid answerOnClick={this.answerOnClick}/>
        <Bottom/>
      </div>
    );
  }
}

export default App;