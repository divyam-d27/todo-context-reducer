import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

const App = () => {
  // console.log("I am Rendered");

  // let count = 100;

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "Code",
  //   },
  //   {
  //     id: 2,
  //     text: "Eat",
  //   },
  //   {
  //     id: 3,
  //     text: "Sleep",
  //   },
  //   {
  //     id: 4,
  //     text: "Worry",
  //   },
  //   {
  //     id: 5,
  //     text: "Repeat",
  //   },
  // ]);

  // const [edit, setEdit] = useState({ edit: {}, isEditing: false });

  // // Delete Todo
  // const removeTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // // Save Todo

  // const addTodo = (text) => {
  //   const newTodo = {
  //     text: text,
  //     id: crypto.randomUUID(),
  //   };

  //   setTodos([newTodo, ...todos]);
  // };

  // const editTodo = (todo) => {
  //   setEdit({
  //     edit: todo,
  //     isEditing: true,
  //   });
  // };

  // const updateTodo = (text) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === edit.edit.id ? { ...todo, text: text } : todo
  //     )
  //   );

  //   setEdit({ edit: {}, isEditing: false });
  // };

  return (
    <>
      <Navbar />

      <div className="container p-5">
        <h1 className="my-2 text-center display-5">React Todo (Conetxt API)</h1>
        <Form />
        <ListGroup />
      </div>
    </>
  );
};

export default App;
