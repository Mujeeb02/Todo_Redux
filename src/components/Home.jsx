import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TodoList from './TodoList';
import { loadTodos } from '../store/actions/todoAction';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      dispatch(loadTodos(savedTodos));
    }
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Todos</h2>
        <Link to="/add" className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Add Todo
        </Link>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;
