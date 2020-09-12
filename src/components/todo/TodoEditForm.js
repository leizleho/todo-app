import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputForm: {
    width: '100%',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(10),
  },
}));
function TodoEditForm({ todo, editTodo, toggleEditForm }) {
  const classes = useStyles();

  const [value, setValue] = useState(todo.task);
  const handleChange = (e) => setValue(e.target.value);

  return (
    <form className={classes.inputForm} onSubmit={(e) => {
      e.preventDefault();
      editTodo(todo.id, value);
      setValue("");
      toggleEditForm();
    }}>
      <Input
        fullWidth
        value={value}
        onChange={handleChange}
        disableUnderline
        autoFocus
      />
    </form>
  );
}

export default TodoEditForm;
