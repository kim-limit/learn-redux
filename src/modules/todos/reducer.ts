import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TodosAction, TodoState } from "./types";

const initialState: TodoState = [];

const todos = (state: TodoState = initialState, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todos;
