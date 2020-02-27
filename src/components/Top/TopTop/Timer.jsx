import React, { Component } from 'react';
// import components

class Timer extends Component {

  render() {
    return (
      <div className="Timer">
          <div className="timerNum" title="when time run out we assume you picked the wrong answer">
            {this.props.time}
          </div>
      </div>
    );
  }
}

export default Timer;