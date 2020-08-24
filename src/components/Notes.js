import React, { Component } from 'react';
import Note from './Note';
import { NoteContext } from '../contexts/Note.context';

// Functional component
// const Notes = props => {
//     const {notes} = props;
//     // console.log(notes[0].id);
//     return (
//         <div>
//             <h3>Notes List</h3>
//             <br/>
//             {notes.map(note => <Note key={note.id} note={note} removeNote={props.removeNote}/>)}
//         </div>
//     )
// }

// Using context API through class based component
class Notes extends Component {
    static contextType = NoteContext;
    render() {
        console.log(this.context);
        const {notes} = this.context;
        return (
            <div>
                <h3>Notes List</h3>
                <br/>
                {notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        )
    }
    
   
}

export default Notes;