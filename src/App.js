import React, { useState, useEffect } from 'react';
import TodoInput from './components/todo/TodoInput';
import TodoList from './components/todo/TodoList';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuid } from 'uuid';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(5),
  },
}));
function App() {
  const classes = useStyles();
  const dummyTodo = [
    { id: 1, task: 'solve 10 algos', completed: false },
    { id: 2, task: 'mail hair donation', completed: false }
  ];

  const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || dummyTodo;
  const [todos, setTodos] = useState(initialTodos);
  const [value, setValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => setValue(e.target.value);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuid(), task: value, completed: false }]);
    setValue("");
  };

  const editTodo = (todoId, task) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleCheck = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <Box>
      <AppBar position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography>Simple Todo App!</Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.container}>
        <TodoInput value={value} onChange={handleInputChange} onSubmit={addTodo} />
        <TodoList
          todos={todos}
          editTodo={editTodo}
          toggleCheck={toggleCheck}
          deleteTodo={deleteTodo}
        />
      </Box>
    </Box>
  );
}

export default App;
