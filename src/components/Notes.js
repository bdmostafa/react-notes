import React from 'react';
import Note from './Note';

const Notes = props => {
    const {notes} = props;
    return (
        <div>
            <h3>Notes List</h3>
            <br/>
            {notes.map(note => <Note key={note.id} title={note.title} description={note.description} removeNote={props.removeNote}/>)}
        </div>
    )
}

export default Notes;