import React, { Component } from 'react';

import Header from './components/Header';
import Counter from './components/Counter';

class App extends Component {
  state = {
    title: 'React Counter',
    counter: 0
  }

  incrementHandler = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}));
  }

  decrementHandler = () => {
    this.setState(prevState => ({counter: prevState.counter - 1}))
  }

  resetCounterHandler = () => {
    this.setState({counter: 0})
  }
  
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <Counter 
          counter={this.state.counter} 
          increment={this.incrementHandler} 
          decrement={this.decrementHandler} 
          reset={this.resetCounterHandler} />
      </div>
    );
  }
}

export default App;
