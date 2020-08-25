import React, { useContext } from 'react';
import Note from './Note';
import { NoteContext } from '../contexts/Note.context';

// Functional component
const Notes = () => {
    const context = useContext(NoteContext);
        // console.log(this.context);
        const {notes} = context;
        return (
            <div>
                <h3>Notes List</h3>
                <hr/>
                {notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        )
}

// Using context API through class based component
// class Notes extends Component {
//     static contextType = NoteContext;
//     componentDidMount(){
//        // Third party API can be used here

//     }
//     render() {
//         // console.log(this.context);
//         const {notes} = this.context;
//         return (
//             <div>
//                 <h3>Notes List</h3>
//                 <br/>
//                 {notes.map(note => <Note key={note.id} note={note} />)}
//             </div>
//         )
//     } 
// }

export default Notes;