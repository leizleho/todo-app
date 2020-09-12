import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import TodoEditForm from './TodoEditForm';

function TodoItem({ todo, deleteTodo, editTodo, toggleCheck }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditForm = () => {
    setIsEditing(isEditing => !isEditing);
  };

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing
        ? <TodoEditForm todo={todo} editTodo={editTodo} toggleEditForm={toggleEditForm} />
        : (<React.Fragment>
          <Checkbox
            checked={todo.completed}
            onClick={() => toggleCheck(todo.id)}
          />
          <ListItemText style={{ textDecoration: todo.completed ? 'line-through red' : 'none' }}>{todo.task}</ListItemText>
          <IconButton onClick={() => toggleEditForm()}><Edit /></IconButton>
          <IconButton onClick={() => deleteTodo(todo.id)}><Delete /></IconButton>
        </React.Fragment>)
      }
    </ListItem>
  );
}

export default TodoItem;
