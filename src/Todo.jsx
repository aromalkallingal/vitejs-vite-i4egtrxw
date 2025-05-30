import React, { useState } from 'react'
import './Todo.css';

const Todo = () => {

    const [nextId, setNextId] = useState(0)
    const [text, setText] = useState("");
    const [artists, setArtists] = useState([]);



    const deleteName = (idToDelete) => {
    const  newArray = artists.filter((artist) => artist.id != idToDelete)
    setArtists(newArray)
    };

    const updateTask = () => {
      console.log("testing")
    }

    const addTask = (event) => {
        setText(event.target.value);
      };

      const addName = () => {
        if (text.trim() === "") return;
        setArtists([...artists, { id: nextId, name: text }]);
        setNextId(nextId + 1);
        setText("");
      };
      
        
        
     

  return (
    <div>
      <div className='input'>
        <input type="text" onChange={addTask} value={text}/>
        <button onClick={addName}>Add</button>
        </div>
        <ul className='list'>
        {artists.map((artist, index) => (
          <li key={index}><input type="checkbox" id="scales" name="scales" />
           {artist.name}
            <button onClick={updateTask}>🖊️</button>
            <button onClick={() => deleteName(artist.id)}>

            ❌</button >
          </li>
        ))}
      </ul>
        
    </div>
  )
}




export default Todo
