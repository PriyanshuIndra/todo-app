import { ListItemText, ListItem,List, Modal, Typography, Button} from '@mui/material'
import './Todo.css';
import React, {useState} from 'react'
import db from './firebase'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Box } from '@mui/system';
import CreateIcon from '@mui/icons-material/Create';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Todo(props) {

    const[open, setOpen] = useState(false);
    const [input, setInput] = useState('')

    const updateTodo = () => {
        // update the todo with the new input text
        setOpen(false)
    }

  return (
    <>
    <Modal 
        open={open}
        onClose= {e => setOpen(false)}
    >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit Your Task
            </Typography>
            <input value={input} onChange={event => (event.target.value)} />
            <Typography id="modal-modal-description" sx={{mt: 2}}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula
            </Typography>

            <Button onClick={e => setOpen(false)}>Cancel</Button>
        </Box>
    </Modal>
    <List className="todo__list">
        <ListItem>
            <ListItemText primary={props.task.task} secondary='to-do' />
        </ListItem>
        <Button><CreateIcon onClick={e => setOpen(true)}></CreateIcon></Button>
        <Button><DeleteRoundedIcon onClick={event => db.collection('todos').doc(props.task.id).delete()} /></Button>
    </List>
    </>
  )
}

export default Todo