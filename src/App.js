import React from 'react';
import Display from './components/Display';
import IncreaseCount from './components/IncreaseCount';
import DecreaseCount from './components/DecreaseCount';
import ResetCount from './components/ResetCount';
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          count: 0
      };
    }

    _increment = () => {
      this.setState({
        count: this.state.count+1
      })
    }

    _decrement = () => {
      this.setState({
        count: this.state.count-1
      })
    }

    _reset = () => {
      this.setState({
        count: 0
      })
    }

    render() {
        return(
          <div className="outer">
            <div className="display">
              <Display count={this.state.count} />   
              <IncreaseCount count={this.state.count} onIncrement={this._increment} />        
              <DecreaseCount count={this.state.count} onDecrement={this._decrement} />    
              <ResetCount count={this.state.count} onReset={this._reset} />        
            </div>
          </div>
        );
    }
}

export default App;
