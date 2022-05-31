import { FC, memo, useState } from "react";
import H3 from "./H3";
import Button from "./Button";
import Input from "./Input";
import { todoAdd } from "./actions";
import { connect } from "react-redux";

type TodoFormProps = {
  onClose: () => void;
  onCreate: (todoTitle: string) => void;
};

const TodoForm: FC<TodoFormProps> = ({onClose,onCreate}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const saveTodo = () => {
    onCreate(inputValue);
    setInputValue("");
    onClose();
  };

  return (
    <>
      <div className="rounded-md px-4 py-2 shadow">
        <H3>Create a todo</H3>
        <div className="mt-4 w-80 mb-4">
          <Input
            value={inputValue}
            onChange={onInputChange}
            placeholder="Your todo text"
          />
        </div>
        <div className="space-x-4">
          <Button disabled={!inputValue} onClick={saveTodo}>
            Save
          </Button>
          <Button onClick={onClose} theme="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

TodoForm.defaultProps = {};

const dispatchMapper = {onCreate: todoAdd}

export default  connect (undefined,dispatchMapper) (memo(TodoForm));
