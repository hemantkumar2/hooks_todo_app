import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";

const TodoApp = () => {
  return (
    <Paper
      style={{ padding: 0, margin: 0, height: "100vh", background: "#fafafa" }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todo app with Hooks</Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default TodoApp;
