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
    console.log("........",this.props);
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    console.log('second', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
  }

  render(){
    this.getTimeUntil(this.props.deadline);
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
