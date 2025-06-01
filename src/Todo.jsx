import React, { useState } from 'react'

const Todo = () => {

   
    const [text, setText] = useState("");
    const [artists, setArtists] = useState([])
    const [id, setId] = useState(0)



    const deleteName = (deletedArtist) => {
      const newArtists = artists.filter((artist) => artist !== deletedArtist)
      setArtists(newArtists)
    };

    const addTask = (event) => {
        setText(event.target.value);
      };

      const addName = () => {
        return(
          setId(id + 1),
          setArtists([
                ...artists,
                { id: id, name: text }
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
          <li key={index}><input type="checkbox" />{artist.name}<button onClick={() => deleteName(artist)}>
            delete button</button></li>
        ))}
      </ul>
        
    </div>
  )
}



export default Todo