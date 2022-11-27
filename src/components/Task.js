import { Checkbox, FormControlLabel, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TodosContext } from "./Todo";
import { useContext } from "react";

export const Task = ({ todo }) => {
  const context = useContext(TodosContext);
  const removeTask = context.removeTaskFunction;
  const markTaskAsCompleted = context.toggleCompleteTask;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              checked={todo.isCompleted}
              onChange={() => markTaskAsCompleted(todo)}
            />
          }
          label={todo.task}
        />
      </Grid>
      <Grid item>
        <IconButton onClick={() => removeTask(todo.id)}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
