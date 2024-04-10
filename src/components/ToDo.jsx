import { useState } from "react";
import AddTodo from "./AddToDo";
import ToDosList from "./ToDoList";

let nextId = 1;
const initialTodos = [{ id: 0, title: "ToDo Example", done: true }];

function ToDo() {
  const [todos, setTodos] = useState(initialTodos);

  function addToDo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function editToDo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function deleteToDo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <div>
        <AddTodo onAddToDo={addToDo} />
        <ToDosList
          todos={todos}
          onChangeToDo={editToDo}
          onDeleteToDo={deleteToDo}
        />
      </div>
    </>
  );
}

export default ToDo;
