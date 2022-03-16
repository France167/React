export default function Todo({ todos, setTodos }) {
  function handleDelete(id) {
    return function (e) {
      e.stopPropagation();
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  }

  function handleComplete(index) {
    return function () {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
      console.log(newTodos);
    };
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <ul className="list-group list-group-flush w-50 m-auto mb-5">
            <li
              onClick={handleComplete(index)}
              className={` ${
                todo.completed
                  ? "list-group-item list-group-item-dark text-decoration-line-through d-flex justify-content-between border-top border-bottom"
                  : "list-group-item d-flex justify-content-between border-top border-bottom"
              }`}
            >
              {todo.title}
              <button
                onClick={handleDelete(todo.id)}
                className="btn btn-close"
                type="button"
              ></button>
            </li>
            {/* <li className="list-group-item">
              <button
                onClick={handleDelete(todo.id)}
                className="btn btn-danger"
                type="button"
              >
                x
              </button>
            </li> */}
          </ul>
        </div>
      ))}
    </div>
  );
}
