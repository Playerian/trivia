import React, { Component } from 'react';
// import '../css/App.css';
// import components
import Answer from './Answer/Answer.jsx';

class Mid extends Component {
  constructor(props){
    super(props);
  }

  responded(no){
    console.log(`${no} has called!`);
    this.props.answerOnClick(no);
  }


  render() {
    let cmps =[];
    for (let i = 0;i<4;i++){
      cmps.push(<Answer no={i} data={this.props.textData[i]} respond={(no) => this.responded(no)}/>);
    }

    return (
      <div className="Mid container">
        {cmps};
      </div>
    );
  }
}

export default Mid;