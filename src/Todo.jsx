import React, { useState } from 'react'

const Todo = () => {

   
    const [text, setText] = useState("");
    const [artists, setArtists] = useState([])
    const [id, setId] = useState(0)
    const [editingId, setEditingId] = useState(null);
  



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
        if (text !== '') {
          if (editingId !== null) {
            // Update existing task
            const updatedArtists = artists.map((artist) =>
              artist.id === editingId ? { ...artist, name: text } : artist
            );
            setArtists(updatedArtists);
            setEditingId(null); // Exit edit mode
          } else {
            // Add new task
            setArtists([...artists, { id: id, name: text }]);
            setId(id + 1);
          }
          setText('');
        }
      };
        
     

  return (
    <div>
        <input type="text" onChange={addTask} value={text} placeholder='add task'/>
        <button onClick={addName}>{editingId !== null ? 'Edit' : 'Add'}</button>

        <ul>
        {artists.map((artist, index) => (
          <li key={artist.id}>
            <input type="checkbox" />
            {artist.name}
            <button onClick={() => deleteName(artist)}>x</button>
            <button onClick={() => editTask(index)}>edit button</button>
            </li>
        ))}
      </ul>
        
    </div>
  )
}



export default Todo