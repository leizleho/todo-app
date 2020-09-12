import React from 'react';
import Input from '@material-ui/core/Input';

function TodoInput({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Input
        fullWidth
        onChange={onChange}
        placeholder="Add Todo"
        value={value}
      />
    </form>
  );
}

export default TodoInput;
