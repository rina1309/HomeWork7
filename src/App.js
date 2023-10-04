// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Header from './pages/Header';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import TwoBlocks from './pages/TwoBlocks';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/form" element={<Form />} /> 
          <Route path="/twoBlocks" element={<TwoBlocks />} /> 
          <Route path="/todolist" element={<TodoList />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;









