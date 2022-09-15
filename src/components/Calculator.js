import React from 'react';
import calculate from '../logic/calculate';

/* eslint-disable react/destructuring-assignment */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(calculate(this.state, e.target.textContent));
  }

  render() {
    return (
      <div className="Calculator">
        <div className="display">
          <span>
            {this.state.total}
            {this.state.operation}
            {this.state.next}
          </span>
        </div>
        <div className="buttons">
          <button type="button" onClick={this.handleEvent}>AC</button>
          <button type="button" onClick={this.handleEvent}>+/-</button>
          <button type="button" onClick={this.handleEvent}>%</button>
          <button type="button" onClick={this.handleEvent} className="operator">/</button>
          <button type="button" onClick={this.handleEvent}>7</button>
          <button type="button" onClick={this.handleEvent}>8</button>
          <button type="button" onClick={this.handleEvent}>9</button>
          <button type="button" onClick={this.handleEvent} className="operator">X</button>
          <button type="button" onClick={this.handleEvent}>4</button>
          <button type="button" onClick={this.handleEvent}>5</button>
          <button type="button" onClick={this.handleEvent}>6</button>
          <button type="button" onClick={this.handleEvent} className="operator">-</button>
          <button type="button" onClick={this.handleEvent}>1</button>
          <button type="button" onClick={this.handleEvent}>2</button>
          <button type="button" onClick={this.handleEvent}>3</button>
          <button type="button" onClick={this.handleEvent} className="operator">+</button>
          <button type="button" onClick={this.handleEvent} className="zero">0</button>
          <button type="button" onClick={this.handleEvent}>.</button>
          <button type="button" onClick={this.handleEvent} className="operator">=</button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
