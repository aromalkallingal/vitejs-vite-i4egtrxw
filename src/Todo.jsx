import React, { useState } from 'react'

const Todo = () => {

    let nextId = 0;
    const [text, setText] = useState("");
    const [artists, setArtists] = useState([]);

 

    const addTask = (event) => {
        setText(event.target.value);
      };

      const addName = () => {
        return(
            setArtists([
                ...artists,
                { id: nextId++, name: text }
              ]),
              setText("")

             
    )
           
    }
        
        
     

  return (
    <div>
        <input type="text" onChange={addTask} value={text}/>
        <button onClick={addName}>Add</button>

        <ul>
        {artists.map(artist => (
          <li >{artist.name}</li>
        ))}
      </ul>
        
    </div>
  )
}



export default Todo