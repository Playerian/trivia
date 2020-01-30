import React, { Component } from 'react';
// import '../css/App.css';
// import components

class Question extends Component {

  render() {
    return (
      <div className="Question">
        {this.props.data}
      </div>
    );
  }
}

export default Question;