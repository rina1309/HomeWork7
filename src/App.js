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
        <Header /> {/* Включаем хедер здесь */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Главная страница */}
          <Route path="/form" element={<Form />} /> {/* Страница с формой */}
          <Route path="/twoBlocks" element={<TwoBlocks />} /> {/* Страница со слайдером */}
          <Route path="/todolist" element={<TodoList />} /> {/* Страница с ToDo-листом */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;









