import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      count: 0
    }
  }

  startClick = () => {
    this.setState({isLoading: true})

    this.timerId = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  stopClick = () => {
    this.setState({isLoading: false})
    clearInterval(this.timerId)
  }

  resetClick = () => {
    this.setState({isLoading: false, count: 0})
    clearInterval(this.timerId)
  }


  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        {!this.state.isLoading ? <button onClick={this.startClick} className="start">Start</button>
          : <button onClick={this.stopClick} className="stop">Stop</button>
        }
        <button onClick={this.resetClick} className="reset">Reset</button>
      </div>
    );
  }
}

export default App;