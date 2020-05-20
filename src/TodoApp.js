import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
      completed: true,
    },
    {
      id: 2,
      task: "Wash Bike",
      completed: false,
    },
    {
      id: 3,
      task: "Grow Beard",
      completed: true,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (addNewTodo) => {
    setTodos([...todos, { id: uuidv4(), task: addNewTodo, completed: false }]);
  };
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
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
          <TodoList todos={todos} removeTodo={removeTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
