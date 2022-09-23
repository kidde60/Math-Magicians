import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);
  const handleEvent = (event) => {
    setState((state) => calculate(state, event.target.textContent));
  };
  return (
    <div className="cal-grid">
      <button type="button" className="workspace">
        {state.next || state.total || 0}
      </button>
      <button type="button" onClick={handleEvent} className="cal-Btn">AC</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">+/-</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">%</button>
      <button type="button" onClick={handleEvent} className="cal-Btn operator">÷</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">7</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">8</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">9</button>
      <button type="button" onClick={handleEvent} className="cal-Btn operator">×</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">4</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">5</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">6</button>
      <button type="button" onClick={handleEvent} className="cal-Btn operator">-</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">1</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">2</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">3</button>
      <button type="button" onClick={handleEvent} className="cal-Btn operator">+</button>
      <button type="button" onClick={handleEvent} className="cal-Btn zero">0</button>
      <button type="button" onClick={handleEvent} className="cal-Btn">.</button>
      <button type="button" onClick={handleEvent} className="cal-Btn operator">=</button>
    </div>

  );
};

export default Calculator;
