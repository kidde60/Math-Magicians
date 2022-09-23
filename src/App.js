import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CalculatorUI from './pages/CalculatorUI';
import Home from './pages/Home';
import Quote from './pages/Quotes';

const App = () => (
  // Create the navigation bar of the App
  <header>
    <nav>
      <h1 className="app-title">Math Magicians</h1>
      <ul className="menu-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li> | </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li> | </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorUI />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </header>
);
export default App;
