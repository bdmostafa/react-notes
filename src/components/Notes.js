import React from 'react';
import Note from './Note';

const Notes = props => {
    const {notes} = props;
    return (
        <div>
            {notes.map(note => <Note key={note.id} title={note.title} description={note.description}/>)}
        </div>
    )
}

export default Notes;