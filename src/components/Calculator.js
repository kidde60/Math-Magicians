import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);
  const handleEvent = (event) => {
    setState((state) => calculate(state, event.target.textContent));
  };
  return (
    <div className="Calculator">

      <div className="display">
        <span>
          {state.next || state.operator || state.total || 0}
        </span>
      </div>
      <div className="buttons">
        <button type="button" onClick={handleEvent}>AC</button>
        <button type="button" onClick={handleEvent}>+/-</button>
        <button type="button" onClick={handleEvent}>%</button>
        <button type="button" onClick={handleEvent} className="operator">/</button>
        <button type="button" onClick={handleEvent}>7</button>
        <button type="button" onClick={handleEvent}>8</button>
        <button type="button" onClick={handleEvent}>9</button>
        <button type="button" onClick={handleEvent} className="operator">X</button>
        <button type="button" onClick={handleEvent}>4</button>
        <button type="button" onClick={handleEvent}>5</button>
        <button type="button" onClick={handleEvent}>6</button>
        <button type="button" onClick={handleEvent} className="operator">-</button>
        <button type="button" onClick={handleEvent}>1</button>
        <button type="button" onClick={handleEvent}>2</button>
        <button type="button" onClick={handleEvent}>3</button>
        <button type="button" onClick={handleEvent} className="operator">+</button>
        <button type="button" onClick={handleEvent} className="zero">0</button>
        <button type="button" onClick={handleEvent}>.</button>
        <button type="button" onClick={handleEvent} className="operator">=</button>
      </div>
    </div>

  );
};

export default Calculator;
