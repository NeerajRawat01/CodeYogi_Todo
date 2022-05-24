import { FC, memo } from "react";
import { useSelector } from "react-redux";
import H3 from "./H3";
import { completeTodoSelector, IncompleteTodoSelector } from "./selector";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
 

  const IncompleteTodo = useSelector(IncompleteTodoSelector);
  const CompleteTodo = useSelector(completeTodoSelector);
  return (
    <>
      <div className="px-32 py-4 shadow flex justify-between">
        <span className="text-xl font-medium">CodeYogi Todo</span>
        <div className="flex space-x-4">
          <H3>
            Incomplete: <span className="text-red-500">{IncompleteTodo.length}</span>
          </H3>
          <H3  >
            Completed: <span className="text-green-500">{CompleteTodo.length}</span>
          </H3>
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);
