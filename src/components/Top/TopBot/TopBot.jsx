import React, { Component } from 'react';
import Question from './Question.jsx';


class Top extends Component {

  render() {
    return (
      <div className="TopBot">
          <Question data={this.props.questionText}/>
      </div>
    );
  }
}

export default Top;