import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const TodoApp = () => {
  const initialTodos = [
    {
      id: 1,
      task: "Clean Fish Tank",
      complete: true,
    },
    {
      id: 2,
      task: "Wash Bike",
      complete: false,
    },
    {
      id: 3,
      task: "Grow Beard",
      complete: true,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (addNewTodo) => {
    setTodos([...todos, { id: 4, task: addNewTodo, completed: false }]);
  };
  return (
    <Paper
      style={{ padding: 0, margin: 0, height: "100vh", background: "#fafafa" }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todo app with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
