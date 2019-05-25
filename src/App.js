import React from 'react';
import './css/App.css';
import Button from './Components/Button'


class App extends React.Component{
  constructor(props) {
    super(props)
    this.increment1 = this.increment1.bind(this);
    this.decrement1 = this.decrement1.bind(this);
    this.increment2 = this.increment2.bind(this);
    this.decrement2 = this.decrement2.bind(this);

    this.state = {
      val1: 0,
      val2: 0
    }      

  }

  increment1 = (val) => {this.setState(prevState => ({val1: prevState.val1 + val}));console.log('inc1');}
  decrement1 = (val) => {this.setState(prevState => ({val1: prevState.val1 + val}));console.log('dec1');}
  
  increment2 = (val) => {this.setState(prevState => ({val2: prevState.val2 + val}));console.log('inc2');}
  decrement2 = (val) => {this.setState(prevState => ({val2: prevState.val2 - val}));console.log('dec2');}
  


  render(){
    const {val1, val2} = this.state;
    return(
      <div className="App">
        <div>
          {val1}
          <Button text = "+" mFunction = {() => this.increment1(1)}/>
          <Button text = "-" mFunction = {() => this.decrement1(-1)}/>
        </div>
        
        <div>
          {val2}
          <Button text = "+" mFunction = {() => this.increment2(this.state.val1)}/>
          <Button text = "-" mFunction = {() => this.decrement2(-this.state.val1)}/>
        </div>
        
      </div>
    );
  }
}

export default App;
