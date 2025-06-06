import React, { useState } from 'react'

const Todo = () => {

   
    const [text, setText] = useState("");
    const [artists, setArtists] = useState([])
    const [id, setId] = useState(0)
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");



    const deleteName = (deletedArtist) => {
      const newArtists = artists.filter((artist) => artist !== deletedArtist)
      setArtists(newArtists)
    };


    const startEdit = (artist) => {
      setEditingId(artist.id);
      setEditText(artist.name);
    };
  
    const saveEdit = (id) => {
      const updatedArtists = artists.map((artist) =>
        artist.id === id ? { ...artist, name: editText } : artist
      );
      setArtists(updatedArtists);
      setEditingId(null);
      setEditText("");
    };
    
    const editTask = (Editedartist) => {
        console.log("edited", Editedartist.name);
    

    }

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
        <input type="text" onChange={addTask} value={text} placeholder='add task'/>
        <button onClick={addName}>Add</button>

        <ul>
        {artists.map((artist, index) => (
          <li>
            <input type="checkbox" />
            {artist.name}
            <button onClick={() => deleteName(artist)}>delete button</button>
            <button onClick={() => editTask(artist)}>edit button</button>
            </li>
        ))}
      </ul>
        
    </div>
  )
}



export default Todo