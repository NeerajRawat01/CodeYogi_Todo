import { FC, memo } from "react";
import { todo } from "../models.ts/todo";
import cn from "classnames";

type todoRowProps = {
  todo: todo;
  onstatusChange: (id: string) => void;
  onDelete: (id: string) => void;
};

const todoRow: FC<todoRowProps> = ({ todo, onstatusChange, onDelete }) => {
  const { id, title, done } = todo;

  const handleChange = () => {
    onstatusChange(id);
  };
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <>
      <div className="flex items-center py-1">
        {id && (
          <input
            onChange={handleChange}
            type="checkbox"
            className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
          />
        )}

        <span
          className={cn(" mr-3 ml-3 font-medium text-gray-700 text-sm", {
            linethrough: done,
          })}
        >
          {title}
        </span>
        {id && (
          <button
            onClick={handleDelete}
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
