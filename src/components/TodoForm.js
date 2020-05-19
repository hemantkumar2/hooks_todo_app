import React from "react";

import useInputState from "../Hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [task, setTask, resetTask] = useInputState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(task);
          resetTask();
        }}
      >
        <input type="text" onChange={setTask} value={task} />
      </form>
    </div>
  );
};

export default TodoForm;
