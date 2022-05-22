import { Reducer } from "redux";
import { createStore } from "redux";
import { todo } from "../models.ts/todo";
import { TODO_ADDED, TODO_DELETE, TODO_MARK_DONE, TODO_MARK_UNDONE } from "./actions";

type State = {
  todos: todo[];
};
const initialState: State = { todos: [{ id: "", title: "", done:false }] };

const reducer: Reducer<State> = (currentState = initialState, action) => {
  switch (action.type) {
    case TODO_ADDED: {
      const newArray = [...currentState.todos, action.payload];
      return { ...currentState, todos: newArray };
    }

    case TODO_DELETE: {
      const newArray = currentState.todos.filter((t) =>t.id !== action.payload)
      return { ...currentState, todos: newArray };
    }

    case TODO_MARK_DONE: {
      const newArray = currentState.todos.map((t) => {
        if (t.id === action.payload) {
          return { ...t, done: true };
        }
        return t;
      });
      return { ...currentState, todos: newArray };
    }
    case TODO_MARK_UNDONE: {
      const newArray = currentState.todos.map((t) => {
        if (t.id === action.payload) {
          return { ...t, done: false };
        }
        return t;
      });
      return { ...currentState, todos: newArray };
    }
    default: {
      return currentState;
    }
  }
};
const store = createStore(reducer);

export default store;
