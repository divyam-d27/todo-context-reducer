import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import todoReducer from "./todoReducer";

const TodoContext = createContext();

export const TodoProvider = function ({ children }) {
  const initialState = {
    todos: [
      // ... your initial todos
    ],
    edit: { edit: {}, isEditing: false },
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoContext;
