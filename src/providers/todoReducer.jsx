export default function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "EDIT":
      return {
        ...state,
        edit: {
          edit: action.payload,
          isEditing: true,
        },
      };
    case "UPDATE":
      return {
        ...state,
        edit: {
          edit: {},
          isEditing: false,
        },
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    default:
      return state;
  }
}
