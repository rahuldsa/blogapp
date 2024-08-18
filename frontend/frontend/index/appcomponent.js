import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/post/:id" element={<DetailView />} />
        <Route path="/new" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;