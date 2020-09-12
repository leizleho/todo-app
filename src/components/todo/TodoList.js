import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, editTodo, toggleCheck }) {
  return (
    <List>
      {
        todos.map((todo, i) =>
          <React.Fragment>
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleCheck={toggleCheck}
            />
            <Divider />
          </React.Fragment>
        )
      }
    </List>
  );
}

export default TodoList;
