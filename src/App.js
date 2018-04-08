import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './app.css';
import { Form, FormControl, Button } from 'react-bootstrap';

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
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl onChange={event=>this.setState({newDeadLine: event.target.value})} placeholder="new date"/>
          <Button onClick={()=>this.changeDeadLine()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
