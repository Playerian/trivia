import React, { Component } from 'react';
import '../css/App.css';
// import components
import Answer from './Mid/Answer/Answer.jsx';
import Question from './Headers/Question.jsx';
import QuestionNo from './Headers/QuestionNo.jsx';
import Timer from './Headers/Timer.jsx';
import Top from './Headers/Top.jsx';
import Mid from './Mid/Mid.jsx';
import Bottom from './Bottom/Bottom.jsx';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Top/>
        <Mid/>
        <Bottom/>
      </div>
    );
  }
}

export default App;