import { FC, memo } from "react";
import { todo } from "../models.ts/todo";
import { completeTodoSelector, IncompleteTodoSelector } from "./selector";
import { State } from "./store";
import TodoRow from "./todoRow";
import { connect } from   "react-redux";

type TodoListProps = {todos:todo[]};

const TodoList: FC<TodoListProps> = ({todos}) => {
  return <div>
      {todos.map(t=> <TodoRow key={t.id} todo={t}/>)}
  </div>;
};

TodoList.defaultProps = {};

export default memo(TodoList);

const completeMapper = (s:State) =>
{
    return {todos:completeTodoSelector(s)};
}
const IncompleteMapper = (s:State) =>
{
    return {todos:IncompleteTodoSelector(s)};
}

export const CompleteTodoList = connect(completeMapper)(TodoList);
export const IncompleteTodoList = connect(IncompleteMapper)(TodoList);