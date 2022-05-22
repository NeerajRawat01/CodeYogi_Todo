import { FC, memo, useState } from "react";
import H3 from "./H3";
import Button from "./Button";
import Input from "./Input";
type TodoFormProps = {
  onClose: () => void;
  onCreate: (todoTitle: string) => void;
};

const TodoForm: FC<TodoFormProps> = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const saveTodo = () => {
    props.onCreate(inputValue);

    setInputValue("");

    props.onClose();
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
          <Button onClick={props.onClose} theme="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

TodoForm.defaultProps = {};

export default memo(TodoForm);
