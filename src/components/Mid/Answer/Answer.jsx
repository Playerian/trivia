import React, { Component } from 'react';
// import components

class Answer extends Component {

  handleClick(){
    this.props.respond(this.props.no);
    console.log("Clicked");
  }

  render() {
    return (
      <div className={"Answer " + this.props.cName} onClick={() => this.handleClick()}>
        {this.props.data}
        
      </div>
    );
  }
}

export default Answer;