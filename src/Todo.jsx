import React, { useState } from 'react'

const Todo = () => {

    let nextId = 0;
    const [text, setText] = useState("");
    const [artists, setArtists] = useState([]);



    const deleteName = (idToDelete) => {
      setArtists(artists.filter(artist => artist.id == idToDelete));
    };

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
          <li key={artist.id}>{artist.name}<button onClick={() => deleteName(artist.id)}>
            delete button</button></li>
        ))}
      </ul>
        
    </div>
  )
}




export default Todo
