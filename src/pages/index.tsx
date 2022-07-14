import * as React from 'react';
import Box from '@mui/material/Box';

import TodoList from '../components/organisms/todoList'
import UserInfo from '../components/organisms/userInfo'


export default function BasicGrid() {
  return (
    <Box>
      <UserInfo />
      <TodoList />
    </Box>
  );
}