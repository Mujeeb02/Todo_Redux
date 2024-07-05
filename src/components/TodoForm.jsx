import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoAction';
import { useNavigate } from 'react-router-dom';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch(addTodo({ title, description }));
    setTitle('');
    setDescription('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        className="px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out mb-2"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description..."
        className="px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out mb-2"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
