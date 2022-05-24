import { State } from "./store";

export const completeTodoSelector = (s: State) => s.todos.filter((t) => t.done);
export const IncompleteTodoSelector = (s: State) => s.todos.filter((t) => !t.done);