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
          <li><Link to="/form" id="form-link">Form Layout (No Logic)</Link></li>
          <li><Link to="/form-ref" id="form-ref-link">Form using useRef</Link></li>
          <li><Link to="/form-state" id="form-state-link">Form using useState</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* Routes ko bhi matching paths de diye */}
        <Route path="/form" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;