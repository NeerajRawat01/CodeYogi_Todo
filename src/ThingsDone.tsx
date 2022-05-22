import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TODO_MARK_UNDONE } from "./actions";
import H3 from "./H3";
import ThingsDoneRow from "./ThingsDoneRow";

type ThingsDoneProps = {};

const ThingsDone: FC<ThingsDoneProps> = (props) => {
  const thingsdoneselector = (s: any) => s.todos.filter((ele: any) => ele.done);

  const thingsdone = useSelector(thingsdoneselector);

  return (
    <>
      <H3>Things Done</H3>
      {thingsdone.length < 1 && <h1>No todo's here</h1>}
      <div>
        {thingsdone.map((e: any) => (
          <ThingsDoneRow title={e.title} key={e.id} id={e.id}></ThingsDoneRow>
        ))}
      </div>
    </>
  );
};

ThingsDone.defaultProps = {};

export default memo(ThingsDone);
