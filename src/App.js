import React from 'react';
import logo from './logo.svg';
import './App.css';

import Key from './components/Key';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/'];

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
          <div className="Result">Result: {result ? result : input}</div>
          <div>
            {numbers.map((number) => (
              <Key keyLabel={number} clickHandler={this.setInputState} />
            ))}
          </div>
          <div>
            {operators.map((operator) => (
              <Key
                keyLabel={operator}
                clickHandler={this.handleOperatorClick}
              />
            ))}
          </div>
          <div>
            <Key keyLabel="C" clickHandler={this.handleOperatorClick} />
            <Key keyLabel="=" clickHandler={this.handleResult} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
