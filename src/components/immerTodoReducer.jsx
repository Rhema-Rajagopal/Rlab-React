import produce from "immer/dist/immer.esm.js";

const immerTodoReducer = (draft, action) => {
  switch (action.type) {
    case "ADD_TODO":
      draft.push({
        id: action.payload.id,
        title: action.payload.title,
        done: false,
      });
      break;
    case "EDIT_TODO":
      draft.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
      });
      break;
    case "TOGGLE_TODO":
      draft.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.done = !todo.done;
        }
      });
      break;
    case "DELETE_TODO":
      return draft.filter((todo) => todo.id !== action.payload.id);
    default:
      break;
  }
};

export default immerTodoReducer;
