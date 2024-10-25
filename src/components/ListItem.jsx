import PropTypes from "prop-types";
import { useContext } from "react";
import TodoContext from "../providers/todoContext";

const ListItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  // Prop validation using PropTypes
  ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
  };

  return (
    <li className="list-group-item rounded-0">
      {todo.text}
      <span className="float-end">
        <button
          className="mx-1 btn btn-warning btn-sm rounded-0"
          onClick={() =>
            dispatch({
              type: "EDIT",
              payload: todo,
            })
          }
        >
          Edit
        </button>
        <button
          className="mx-1 btn btn-danger btn-sm rounded-0"
          onClick={() =>
            dispatch({
              type: "REMOVE",
              payload: todo.id,
            })
          }
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
