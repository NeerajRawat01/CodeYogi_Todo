import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { TODO_DELETE, TODO_MARK_DONE } from "./actions";
type ThingsDoRowProps = { title: string; id: string };

const ThingsDoRow: FC<ThingsDoRowProps> = (props) => {
  const dispatch = useDispatch();
  const onCheckboxChange = () => {
    dispatch({ type: TODO_MARK_DONE, payload: props.id });
  };
  const onDelete= () => {
    dispatch({ type: TODO_DELETE, payload: props.id });
  };
  return (
    <>
      <div className="flex items-center py-1">
        {props.id && (
          <input
            onChange={onCheckboxChange}
            type="checkbox"
            className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
          />
        )}

        <span className=" mr-3 ml-3 font-medium text-gray-700 text-sm">
          {props.title}
        </span>
         {props.id &&
        <button onClick={onDelete} className="font-bold bg-red-300 hover:text-white cursor-pointer px-2 rounded-full">X</button>}
      </div>
    </>
  );
};

ThingsDoRow.defaultProps = {};

export default memo(ThingsDoRow);
