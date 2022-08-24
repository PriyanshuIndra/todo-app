import { ListItemText, ListItem,List, Button } from '@mui/material'
import './Todo.css';
import React from 'react'
import db from './firebase'

function Todo(props) {
  return (
    <List className="todo__list">
        <ListItem>
            <ListItemText primary={props.task.task} secondary='to-do' />
        </ListItem>
        <Button onClick={event => db.collection('todos').doc(props.task.id).delete()}>Done</Button>
    </List>
  )
}

export default Todo