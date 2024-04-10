import React, { useState } from "react";
import AddTodo from "./AddToDo";
import ToDosList from "./ToDoList";
import todoReducer from "./todoReducer";
// import immerTodoReducer from "./immerTodoReducer";
// import { useImmerReducer } from "use-immer";
let nextId = 1;
const initialTodos = [{ id: 0, title: "ToDo Example", done: true }];

function ToDo() {
  const [todos, setTodos] = useState(initialTodos);
  //   const [immerTodos, immerDispatch] = useImmerReducer(
  //     immerTodoReducer,
  //     initialTodos
  //   );
  const [inputValue, setInputValue] = useState("");

  function addToDo() {
    dispatch({
      type: "ADD_TODO",
      payload: { id: nextId++, title: inputValue },
    });
    setInputValue("");
  }

  //   function addImmerToDo() {
  //     immerDispatch({
  //       type: "ADD_TODO",
  //       payload: { id: nextId++, title: inputValue },
  //     });
  //     setInputValue("");
  //   }

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
        <button onClick={addToDo} disabled={!inputValue.trim()}>
          Add Task (useReducer)
        </button>
        {/* <button onClick={addImmerToDo} disabled={!inputValue.trim()}>
          Add Task (useImmerReducer)
        </button> */}
        <AddTodo onAddToDo={addToDo} />
        <ToDosList
          todos={todos}
          onChangeToDo={editToDo}
          onDeleteToDo={deleteToDo}
        />
        {/* <ToDosList todos={immerTodos} /> */}
      </div>
    </>
  );
}

export default ToDo;
