import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

const App = () => {
  return (
    <div>
      <h3>Social Media App</h3>
      <hr />
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/item/:id" element={< Detail />} />
      </Routes>
    </div>
  );
};

export default App;
