import React, { Component } from 'react';
import './app.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      deadline: 'December 25, 2018...'
    }
  }

  changeDeadLine(){
    this.setState({
      deadline: this.state.newDeadLine
    })
  }
  render(){
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">30 hrs</div>
          <div className="Clock-minutes">15 mins</div>
          <div className="Clock-seconds">20 secs</div>
        </div>
        <div>
          <input onChange={event=>this.setState({newDeadLine: event.target.value})} placeholder="new date"/>
          <button onClick={()=>this.changeDeadLine()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
