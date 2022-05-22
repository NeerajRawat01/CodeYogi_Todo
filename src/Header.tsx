import { FC, memo } from "react";
import { useSelector } from "react-redux";
import H3 from "./H3";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const thingsdoneselector = (s: any) => s.todos.filter((ele: any) => ele.done);
  const thingsselector = (s: any) => s.todos.filter((ele: any) => !ele.done);

  const thingsdo = useSelector(thingsselector);
  const thingsdone = useSelector(thingsdoneselector);
  return (
    <>
      <div className="px-32 py-4 shadow flex justify-between">
        <span className="text-xl font-medium">CodeYogi Todo</span>
        <div className="flex space-x-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Incomplete: <span className="text-red-500">{thingsdo.length - 1}</span>
          </h3>
          <h3 className="text-lg font-medium leading-6 text-gray-900" >
            Completed: <span className="text-green-500">{thingsdone.length}</span>
          </h3>
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default memo(Header);
