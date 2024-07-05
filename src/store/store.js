import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';
import { loadTodos } from './actions/todoAction';

const persistedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: {
    todos: { todos: persistedTodos },
  },
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('todos', JSON.stringify(state.todos.todos));
});

export default store;
