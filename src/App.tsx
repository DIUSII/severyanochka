import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Counter } from 'pages/Counter';

import './App.scss';

function Test() {
  return <div>Привет</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
