import { ListItemText, ListItem,List } from '@mui/material'
import './Todo.css';
import React from 'react'

function Todo(props) {
  return (
    <List className="todo__list">
        <ListItem>
            <ListItemText primary={props.text} secondary='to-do' />
        </ListItem>
    </List>
  )
}

export default Todo