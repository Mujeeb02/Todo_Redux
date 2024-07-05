import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import store from './store/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Home from '../src/components/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <div className="max-w-md w-full p-4 bg-white rounded-md shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
            <Routes>
              <Route path="/add" element={<TodoForm />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
