import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TodoCard from '../moleculres/todoCard'

const TodoList = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </Grid>
    </Box>
  );
}

export default TodoList