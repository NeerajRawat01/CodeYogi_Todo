import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADDED } from "./actions";
import Button from "./Button";
import H1 from "./H1";
import Header from "./Header";
import TodoForm from "./TodoForm";
import { CompleteTodoList, IncompleteTodoList } from "./TodoList";

const App: FC = () => {
  const [todoFormVisible, setTodoFormVisiblity] = useState(false);
  const showTodoForm = () => setTodoFormVisiblity(true);
  const hideTodoForm = () => setTodoFormVisiblity(false);
  const dispatch = useDispatch();
  const addTodo = (todoTitle: string) => {
    dispatch({
      type: TODO_ADDED,
      payload: { id: todoTitle, title: todoTitle, done: false },
    });
  };

  return (
    <div className=" ">
      <Header></Header>
      <div className="px-32 py-3 space-y-3">
        <H1>Things to get Done</H1>
        <IncompleteTodoList />
        {!todoFormVisible && (
          <Button onClick={showTodoForm} theme="highlight" icon="+">
            Add a todo
          </Button>
        )}
        {todoFormVisible && (
          <TodoForm onClose={hideTodoForm} onCreate={addTodo} />
        )}
        <CompleteTodoList></CompleteTodoList>
      </div>
    </div>
  );
};

export default App;
