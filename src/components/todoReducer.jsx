// todoReducer.js (useReducer version)
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          done: false,
        },
      ];
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;

// immerTodoReducer.js (useImmerReducer version)
//   import produce from "immer";

//   const immerTodoReducer = (draft, action) => {
//     switch (action.type) {
//       case "ADD_TODO":
//         draft.push({
//           id: action.payload.id,
//           title: action.payload.title,
//           done: false,
//         });
//         break;
//       case "EDIT_TODO":
//         draft.forEach((todo) => {
//           if (todo.id === action.payload.id) {
//             todo.title = action.payload.title;
//           }
//         });
//         break;
//       case "TOGGLE_TODO":
//         draft.forEach((todo) => {
//           if (todo.id === action.payload.id) {
//             todo.done = !todo.done;
//           }
//         });
//         break;
//       case "DELETE_TODO":
//         return draft.filter((todo) => todo.id !== action.payload.id);
//       default:
//         break;
//     }
//   };

//   export default immerTodoReducer;
