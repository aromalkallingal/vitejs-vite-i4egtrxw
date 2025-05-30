import React, { useState } from 'react'

const Todo = () => {

    const [nextId, setNextId] = useState(0)
    const [text, setText] = useState("");
    const [artists, setArtists] = useState([]);



    const deleteName = (idToDelete) => {
    const  newArray = artists.filter((artist) => artist != idToDelete)
    setArtists(newArray)
    };

    const updateTask = () => {
      console.log("testing")
    }

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
          <li key={index}><input type="checkbox" id="scales" name="scales" />
           {artist.name}
            <button onClick={updateTask}>Edit</button>
            <button onClick={() => deleteName(artist)}>
            X</button >
          </li>
        ))}
      </ul>
        
    </div>
  )
}




export default Todo
