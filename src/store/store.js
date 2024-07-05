import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';
import { loadTodos } from './actions/todoAction';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (savedTodos) {
  store.dispatch(loadTodos(savedTodos));
}

export default store;
