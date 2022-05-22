import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import H3 from "./H3";
import { todo } from "../models.ts/todo";
import ThingsDoRow from "./ThingsDoRow";
import { TODO_MARK_DONE } from "./actions";

type ThingsToDoProps = {};

const ThingsToDo: FC<ThingsToDoProps> = (props) => {
  const thingsselector = (s: any) => s.todos.filter((ele: any) => !ele.done);

  const thingsdo = useSelector(thingsselector);


  return (
    <>
      <H3>Things to do</H3>
      { thingsdo.length <2 &&
      <h1>No todo's here</h1> }
      <div>
        {thingsdo.map((e: any) => (
          <ThingsDoRow key={e.id} title={e.title} id={e.id}></ThingsDoRow>
        ))}
      </div>
      
    </>
  );
};

ThingsToDo.defaultProps = {};

export default memo(ThingsToDo);
