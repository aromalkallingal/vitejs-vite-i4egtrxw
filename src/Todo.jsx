import React, { useState } from 'react'

const Todo = () => {

   
    const [text, setText] = useState("");
    const [artists, setArtists] = useState([])
    const [id, setId] = useState(0)
    const [editingId, setEditingId] = useState(0);
  



    const deleteName = (deletedArtist) => {
      const newArtists = artists.filter((artist) => artist !== deletedArtist)
      setArtists(newArtists)
    };



    
    const editTask = (id) => {
       const editTodo = artists.find((artist) => artist.id == id);
       console.log(editTodo)
       setText(editTodo.name)
       setEditingId(editTodo.id)
    }

    const addTask = (event) => {
        setText(event.target.value);
      };

      const addName = () => {
        if (text != ''){
          setId(id + 1),
          setArtists([
                ...artists,
                { id: id, name: text }
              ]),
              setText("")        
            }
           
    }
        
        
     

  return (
    <div>
        <input type="text" onChange={addTask} value={text} placeholder='add task'/>
        <button onClick={addName}>{editingId ? "edit" : 'add'}</button>

        <ul>
        {artists.map((artist, index) => (
          <li>
            <input type="checkbox" />
            {artist.name}
            <button onClick={() => deleteName(artist)}>delete button</button>
            <button onClick={() => editTask(index)}>edit button</button>
            </li>
        ))}
      </ul>
        
    </div>
  )
}



export default Todo