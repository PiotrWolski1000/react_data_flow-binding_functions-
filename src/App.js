import React from 'react';
import './css/App.css';
import Button from './Components/Button'


class App extends React.Component{
  constructor(props) {
    super(props)
    this.f1 = this.f1.bind(this);
    this.f2 = this.f2.bind(this);
    
    this.state = {
      val1: 0,
      val2: 0
    }      

  }

  f1 = (val) => {this.setState(prevState => ({val1: prevState.val1 + val}));console.log('f1');}

  f2 = (val) => {this.setState(prevState => ({val2: prevState.val2 + val}));console.log('f2');}



  render(){
    const {val1, val2} = this.state;
    return(
      <div className="App">
        <div>
          {val1}
          <Button text = "+" mFunction = {() => this.f1(1)}/>
          <Button text = "-" mFunction = {() => this.f1(-1)}/>
        </div>
        
        <div>
          {val2}
          <Button text = "+" mFunction = {() => this.f2(this.state.val1)}/>
          <Button text = "-" mFunction = {() => this.f2(-this.state.val1)}/>
        </div>
        
      </div>
    );
  }
}

export default App;
