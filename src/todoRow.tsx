import { FC, memo } from "react";
import { todo } from "../models.ts/todo";
import  cn  from "classnames";
import { useDispatch } from "react-redux";
import { TODO_STATUS_CHANGE, TODO_DELETE } from "./actions";

type todoRowProps = {
    todo:todo;
};

const todoRow: FC<todoRowProps> = ({todo}) => {
    const {id,title,done} = todo;

    const dispatch = useDispatch();
  const onstatusChange = () => {
    dispatch({ type: TODO_STATUS_CHANGE, payload: id });
  };
  const onDelete= () => {
    dispatch({ type: TODO_DELETE, payload: id });
  };
  return (
    <>
      <div className="flex items-center py-1">
        {id && (
          <input
            onChange={onstatusChange}
            type="checkbox"
            className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
          />
        )}

        <span className={ cn(" mr-3 ml-3 font-medium text-gray-700 text-sm",{"linethrough": done})}>
          {title}
        </span>
        {id && (
          <button
            onClick={onDelete}
            className="font-bold bg-red-300 hover:text-white cursor-pointer px-2 rounded-full"
          >
            X
          </button>
        )}
      </div>
    </>
  );
};

todoRow.defaultProps = {};

export default memo(todoRow);