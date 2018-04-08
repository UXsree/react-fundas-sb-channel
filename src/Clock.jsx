import React, { Component } from 'react';
import './app.css';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state={
      days:0,
      hours:0,
      minutes:0,
      seconds:0,
    }
  }
  render(){
    return(
        <div>
          <div className="Clock-days">{this.state.days} days</div>
          <div className="Clock-hours">{this.state.hours} hrs</div>
          <div className="Clock-minutes">{this.state.minutes} mins</div>
          <div className="Clock-seconds">{this.state.seconds} secs</div>
        </div>
    )
  }
}

export default Clock;
