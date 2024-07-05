import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: {
    id: uuidv4(),
    title: todo.title,
    description: todo.description,
    date: todo.date,
    completed: false,
  },
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

export const editTodo = (id, updates) => ({
  type: 'EDIT_TODO',
  payload: { id, updates },
});

export const loadTodos = (todos) => ({
  type: 'LOAD_TODOS',
  payload: todos,
});
