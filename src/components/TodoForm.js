import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../Hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [task, setTask, resetTask] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(task);
          resetTask();
        }}
      >
        <TextField fullWidth type="text" onChange={setTask} value={task} />
      </form>
    </Paper>
  );
};

export default TodoForm;
