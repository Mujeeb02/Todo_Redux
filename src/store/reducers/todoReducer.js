import { loadTodos } from '../actions/todoAction';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const addedState = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      localStorage.setItem('todos', JSON.stringify(addedState.todos));
      return addedState;
    case 'DELETE_TODO':
      const deletedState = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      localStorage.setItem('todos', JSON.stringify(deletedState.todos));
      return deletedState;
    case 'TOGGLE_TODO':
      const toggledState = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
      localStorage.setItem('todos', JSON.stringify(toggledState.todos));
      return toggledState;
    case 'EDIT_TODO':
      const editedState = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
        ),
      };
      localStorage.setItem('todos', JSON.stringify(editedState.todos));
      return editedState;
    case 'LOAD_TODOS':
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
