import PropTypes from "prop-types";
import ListItem from "./ListItem";
import { useContext } from "react";
import TodoContext from "../providers/todoContext";

const ListGroup = () => {
  const { todos } = useContext(TodoContext);
  // Prop validation using PropTypes
  ListGroup.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return (
    <ul className="list-group my-2">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ListGroup;
