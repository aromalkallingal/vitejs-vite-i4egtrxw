import React, { useState } from 'react'

const Todo = () => {

    const [nextId, setNextId] = useState(0)
    const [text, setText] = useState("");
    const [artists, setArtists] = useState([]);



    const deleteName = (idToDelete) => {
      console.log(idToDelete.id)
      console.log(idToDelete.name)
    };

    const addTask = (event) => {
        setText(event.target.value);
      };

      const addName = () => {
        return(
          setNextId(nextId + 1),
            setArtists([
                ...artists,
                { id: nextId, name: text }
              ]),
              setText("")

             
    )
           
    }
        
        
     

  return (
    <div>
        <input type="text" onChange={addTask} value={text}/>
        <button onClick={addName}>Add</button>

        <ul>
        {artists.map((artist, index) => (
          <li key={index}>{artist.name}<button onClick={() => deleteName(artist)}>
            X</button ></li>
        ))}
      </ul>
        
    </div>
  )
}




export default Todo
