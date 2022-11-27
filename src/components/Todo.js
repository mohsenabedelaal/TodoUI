import { Box, Grid, Link, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTodo } from "../apiservices/createTodo";
import { deleteTodo } from "../apiservices/deleteTodo";
import { getTodos } from "../apiservices/getTodos";
import { updateTodo } from "../apiservices/updateTodo";
import { Task } from "./Task";
import logo from "../imgs/group.svg";

export const TodosContext = React.createContext();

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [reload, setReload] = useState(false);
  const [conditionQuery, setConditionQuery] = useState("showAll=true");

  useEffect(() => {
    getTodos(conditionQuery)
      .then((data) => setTodos(data.todos))
      .catch((error) => console.error("error in fetch todos " + error));
  }, [reload, conditionQuery]);

  const onKeyCodeChange = (e) => {
    if (e.keyCode == 13) {
      createTodo({ task: e.target.value, isCompleted: false })
      .then(resp=> {
        setReload(!reload)
        e.target.value = "";
    })
      .catch((error) =>
        console.error("error when creating new todo " + error)
      );
      
    }
  };
  const removeTask = (taskId) => {
    deleteTodo(taskId).catch((error) =>
      console.error("error when deleting TODO " + error)
    );
    setReload(!reload);
  };
  const toggleCompleteTask = (todo) => {
    updateTodo(todo.id, {
      task: todo.task,
      isCompleted: !todo.isCompleted,
    }).catch((error) =>
      console.error("Error wehn updating the todo complete " + error)
    );
    setReload(!reload);
  };
  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        removeTaskFunction: removeTask,
        toggleCompleteTask: toggleCompleteTask,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid
          item
          style={{
            width: "30%",
            height: "50%",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <Paper elevation={3} style={{ padding: "10%" }}>
            <img src={logo} alt="todoIcon" />
            <h3>Todo List</h3>
            <TextField
              id="standard-basic"
              label="Add a new todo"
              variant="standard"
              fullWidth
              onKeyDown={onKeyCodeChange}
            />
            <Box mb={3} />
            {todos.length > 0 ? (
              todos.map((todo) => <Task key={todo.id} todo={todo} />)
            ) : (
              <></>
            )}
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <h6 style={{ color: "rgba(31, 42, 75, 0.59)" }}>Show:</h6>
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  color={
                    conditionQuery === "showAll=true" ? "inherit" : "primary"
                  }
                  underline={
                    conditionQuery === "showAll=true" ? "none" : "always"
                  }
                  onClick={() => setConditionQuery("showAll=true")}
                >
                  All
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  color={
                    conditionQuery === "showCompleted=true"
                      ? "inherit"
                      : "primary"
                  }
                  underline={
                    conditionQuery === "showCompleted=true" ? "none" : "always"
                  }
                  onClick={() => setConditionQuery("showCompleted=true")}
                >
                  Completed
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  color={
                    conditionQuery === "showCompleted=false"
                      ? "inherit"
                      : "primary"
                  }
                  underline={
                    conditionQuery === "showCompleted=false" ? "none" : "always"
                  }
                  onClick={() => setConditionQuery("showCompleted=false")}
                >
                  Incompleted
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </TodosContext.Provider>
  );
};

export default Todo;
