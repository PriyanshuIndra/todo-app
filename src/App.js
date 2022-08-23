import React, {useEffect, useState} from 'react';
import './App.css';
import db from './firebase'

// Importing components of Material UI
import SendIcon from '@mui/icons-material/Send';
import { Button ,InputLabel, FormControl, Input } from '@mui/material';

// Importing Components
import Todo from './Todo';

function App() {

  const [todos, setTodos] = useState([]);
  let [inputValue, setInputValue] = useState('');

  // when the app loads, we  need to listen to the database and fetch new todos as the added/removed

  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().task));
      setTodos(snapshot.docs.map(doc => doc.data().task));
    })
  }, [])

  function inputHandler(event) {
    let value = event.target.value;

    setInputValue((prevValue) => {
      inputValue = value
      return inputValue;
    })
  }

  function submitHandler (event) {
    
    setTodos(prevValue => {
      return [inputValue, ...prevValue]
    })

    setInputValue('');
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Todoist</h1> 
      <form>
        
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input onChange={inputHandler} value={inputValue}/>
        </FormControl>
          {/* the button will be disabled if the input value is empty */}
        <Button disabled={!inputValue} type='submit' onClick={submitHandler} variant="contained" endIcon={<SendIcon />}>
          Add 
        </Button>
      </form>
    
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
