import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/actions/todoAction';
import { FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';
import EditTodoModal from './EditTodoModal';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{todo.title}</h3>
          <p className="text-sm text-gray-600">{todo.description}</p>
        </div>
        <span className={`px-2 py-1 text-sm rounded ${todo.completed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {todo.completed ? 'Complete' : 'Incomplete'}
        </span>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={handleToggle} className="text-blue-500 hover:text-blue-600 mx-1">
          <FaCheckCircle size={20} />
        </button>
        <button onClick={handleEdit} className="text-yellow-500 hover:text-yellow-600 mx-1">
          <FaEdit size={20} />
        </button>
        <button onClick={handleDelete} className="text-red-500 hover:text-red-600 mx-1">
          <FaTrash size={20} />
        </button>
      </div>
      {isEditing && (
        <EditTodoModal
          isOpen={isEditing}
          onRequestClose={closeEditModal}
          todo={todo}
        />
      )}
    </div>
  );
};

export default TodoItem;
