import { useGlobalContext } from "../context/GlobalContext";
import Todo from "../components/Todolist/Todo";
import NewItem from "../components/Todolist/NewItem";

function Todolist() {
  const { todos, setTodos } = useGlobalContext();
  console.log(todos);
  return (
    <div className="App">
      <h1 className="mt-5">To do list</h1>
      <NewItem setTodos={setTodos} todos={todos} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todolist;
