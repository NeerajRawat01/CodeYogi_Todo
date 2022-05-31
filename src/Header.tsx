import { FC, memo } from "react";
import { connect, useSelector } from "react-redux";
import { todo } from "../models.ts/todo";
import H3 from "./H3";
import { completeTodoSelector, IncompleteTodoSelector } from "./selector";
import { State } from "./store";

type HeaderProps = {
  incompleteTodos: todo[];
  completetodos: todo[];
};

const Header: FC<HeaderProps> = ({ incompleteTodos, completetodos }) => {
  const IncompleteTodo = useSelector(IncompleteTodoSelector);
  const CompleteTodo = useSelector(completeTodoSelector);
  return (
    <>
      <div className="px-32 py-4 shadow flex justify-between">
        <span className="text-xl font-medium">CodeYogi Todo</span>
        <div className="flex space-x-4">
          <H3>
            Incomplete:
            <span className="text-red-500">{incompleteTodos.length}</span>
          </H3>
          <H3>
            Completed:
            <span className="text-green-500">{CompleteTodo.length}</span>
          </H3>
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {};

const TodosCount = (s: State) => {
  return {
    completetodos: completeTodoSelector(s),
    incompleteTodos: IncompleteTodoSelector(s),
  };
};
export default memo(Header);

export const HeaderWithCount = connect(TodosCount)(Header);
