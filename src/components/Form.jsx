import { useContext, useEffect, useState } from "react";
import TodoContext from "../providers/todoContext";

const Form = () => {
  const { edit, dispatch } = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEditing
      ? dispatch({
          type: "UPDATE",
          payload: { id: edit.edit.id, text },
        })
      : dispatch({
          type: "ADD",
          payload: { id: crypto.randomUUID(), text },
        });
    setText("");
  };

  useEffect(() => {
    edit.isEditing && setText(edit.edit.text);
  }, [edit.isEditing, edit.edit]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Text"
        className="form-control rounded-0"
        onChange={(e) => setText(e.target.value)}
        value={text}
        required
      />
      <button className="btn btn-success w-100 my-3 rounded-0">Save</button>
    </form>
  );
};

export default Form;
