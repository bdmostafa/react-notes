import React from 'react';
import Note from './Note';

const Notes = props => {
    const {notes} = props;
    // console.log(notes[0].id);
    return (
        <div>
            <h3>Notes List</h3>
            <br/>
            {notes.map(note => <Note key={note.id} note={note} removeNote={props.removeNote}/>)}
        </div>
    )
}

export default Notes;