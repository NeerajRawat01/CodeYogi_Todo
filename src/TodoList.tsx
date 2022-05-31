import { FC, memo } from "react";
import { todo } from "../models.ts/todo";
import { completeTodoSelector, IncompleteTodoSelector } from "./selector";
import { State } from "./store";
import TodoRow from "./todoRow";
import { connect } from "react-redux";
import { todoDelete, todoStatusChange } from "./actions";

type TodoListProps = {
  todos: todo[];
  onstatusChange: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onstatusChange, onDelete }) => {
  return (
    <div>
      {todos.map((t) => (
        <TodoRow
          key={t.id}
          todo={t}
          onstatusChange={onstatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);

const completeMapper = (s: State) => {
  return { todos: completeTodoSelector(s) };
};
const IncompleteMapper = (s: State) => {
  return { todos: IncompleteTodoSelector(s) };
};
const dispatchMapper = {
  onstatusChange: todoStatusChange,
  onDelete: todoDelete,
};

export const CompleteTodoList = connect(
  completeMapper,
  dispatchMapper
)(TodoList);
export const IncompleteTodoList = connect(
  IncompleteMapper,
  dispatchMapper
)(TodoList);
