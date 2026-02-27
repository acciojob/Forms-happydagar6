import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          {/* Tests pass karne ke liye exact id dena zaroori hai */}
          <li><Link to="/" id="form-link">Form Layout (No Logic)</Link></li>
          <li><Link to="/ref" id="form-ref-link">Form using useRef</Link></li>
          <li><Link to="/state" id="form-state-link">Form using useState</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/ref" element={<FormRef />} />
        <Route path="/state" element={<FormState />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;