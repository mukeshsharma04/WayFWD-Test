import React from 'react';
import './App.css';

import Key from './components/Key';

const INIT_STATE = {
  input: '',
  operator: '',
  result: '',
};
class App extends React.Component {
  state = INIT_STATE;

  setInputState = (updateInput) => {
    const { input } = this.state;
    this.setState({ input: `${input}${updateInput}`, result: '' });
  };

  clearInputState = () => this.setState({ ...INIT_STATE });

  handleOperatorClick = (operator) => {
    const { result, input } = this.state;
    const mergeOperator = result
      ? `${result}${operator}`
      : `${input}${operator}`;

    this.setState({
      operator: mergeOperator,
      input: '',
      result: '',
    });
  };

  handleResult = () => {
    const mergeInput = `${this.state.result}${this.state.operator}${this.state.input}`;
    const calculateResult = eval(mergeInput);
    this.setState({ input: '', operator: '', result: calculateResult });
  };

  render() {
    const { input, result } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div className="Calc-Container">
            <div className="Result">{result ? result : input}</div>

            <div className="Row">
              <Key keyLabel="C" clickHandler={this.clearInputState} />
              <Key keyLabel="/" clickHandler={this.handleOperatorClick} />
            </div>
            <div className="Row">
              <Key keyLabel="7" clickHandler={this.setInputState} />
              <Key keyLabel="8" clickHandler={this.setInputState} />
              <Key keyLabel="9" clickHandler={this.setInputState} />
              <Key keyLabel="*" clickHandler={this.handleOperatorClick} />
            </div>
            <div className="Row">
              <Key keyLabel="4" clickHandler={this.setInputState} />
              <Key keyLabel="5" clickHandler={this.setInputState} />
              <Key keyLabel="6" clickHandler={this.setInputState} />
              <Key keyLabel="-" clickHandler={this.handleOperatorClick} />
            </div>
            <div className="Row">
              <Key keyLabel="1" clickHandler={this.setInputState} />
              <Key keyLabel="2" clickHandler={this.setInputState} />
              <Key keyLabel="3" clickHandler={this.setInputState} />
              <Key keyLabel="+" clickHandler={this.handleOperatorClick} />
            </div>
            <div className="Row">
              <Key keyLabel="0" clickHandler={this.setInputState} />
              <Key keyLabel="=" clickHandler={this.handleResult} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
