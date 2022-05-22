import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { TODO_DELETE, TODO_MARK_UNDONE } from "./actions";
type ThingsDoneRowProps = {
  title: string;
  id: string;
};

const ThingsDoneRow: FC<ThingsDoneRowProps> = (props) => {
  const dispatch = useDispatch();
  const onCheckboxChange = () => {
    dispatch({
      type: TODO_MARK_UNDONE,
      payload: props.id,
    });
  };
  const onDelete = () => {
    dispatch({ type: TODO_DELETE, payload: props.id });
  };
  return (
    <>
      <div className="flex items-center py-1 px-1">
        <input
          checked
          onChange={onCheckboxChange}
          type="checkbox"
          className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        />
        <span className=" line-through mr-3 ml-3 font-medium text-gray-700 text-sm">
          {props.title}
        </span>
        {props.id && (
          <button onClick={onDelete} className="font-bold bg-red-300 hover:text-white cursor-pointer px-2 rounded-full">
            X
          </button> 
        )}

        
      </div>
    </>
  );
};

ThingsDoneRow.defaultProps = {};

export default memo(ThingsDoneRow);
