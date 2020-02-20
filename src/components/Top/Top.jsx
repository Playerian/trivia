import React, { Component } from 'react';
// import components
import TopTop from './TopTop/TopTop.jsx';
import TopBot from './TopBot/TopBot.jsx';

class Top extends Component {

  render() {
    return (
      <div className="Top container">
        <TopTop qNum={this.props.qNum}/>
        <TopBot questionText={this.props.questionText}/>
      </div>
    );
  }
}

export default Top;