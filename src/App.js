import React, { Component } from 'react';

import Aux from './hoc/AuxWrap';

import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';

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
      <Aux>
        <Header 
          icon="fas fa-hand-point-up"
          title={this.state.title} />
        <Counter 
          counter={this.state.counter} 
          increment={this.incrementHandler} 
          decrement={this.decrementHandler} 
          reset={this.resetCounterHandler} />
        <Footer />
      </Aux>
    );
  }
}

export default App;
