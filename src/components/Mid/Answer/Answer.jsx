import React, { Component } from 'react';
// import components

class Answer extends Component {

  handleClick(){
    this.props.respond(this.props.no);
  }

  render() {
    return (
      <div className="Answer" onClick={() => this.handleClick()}>
        
        
      </div>
    );
  }
}

export default Answer;