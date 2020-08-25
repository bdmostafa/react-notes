import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Functional component
export const NoteProvider = props => {
    const [notes, setNotes] = useState([
                {
                    id: 1,
                    title: 'Notes 1',
                    description: 'Notes 1 description'
                },
                {
                    id: 2,
                    title: 'Notes 2',
                    description: 'Notes 2 description'
                },
                {
                    id: 3,
                    title: 'Notes 3',
                    description: 'Notes 3 description'
                }
            ])
    // Replace life cycle method by useEffect
    useEffect(()=> {
        // Create runAsync function because async can not be used in useEffect 
        const runAsync = async ()=>{
            try {
                const res = await axios
                .get('https://jsonplaceholder.typicode.com/comments');
                const {data} = res;
                setNotes(data);
            } catch (e){
                console.log(e);
            }
        }
        runAsync();

    }, []) // Empty [] indicates that this useEffect code executes at a single time, not a second time until anything is put in the array like [notes/...]
    const addNote = note => {
        setNotes([...notes, note]);
    };
    const removeNote = id => {
        // console.log(id);
        setNotes([...notes.filter(note => note.id !== id)]);
    };
        return(
            <NoteContext.Provider value={{
                notes: notes,
                addNote: addNote,
                removeNote: removeNote
                }}>
                {props.children}

            </NoteContext.Provider>
        )
}

// Class based component
// export class NoteProvider extends Component {
//     state = {
//         notes: [
//             {
//                 id: 1,
//                 title: 'Notes 1',
//                 description: 'Notes 1 description'
//             },
//             {
//                 id: 2,
//                 title: 'Notes 2',
//                 description: 'Notes 2 description'
//             },
//             {
//                 id: 3,
//                 title: 'Notes 3',
//                 description: 'Notes 3 description'
//             }
//         ]
//     };
//     // Life Cycle method
//     async componentDidMount(){
//         try {
//             const res = await axios
//             .get('https://jsonplaceholder.typicode.com/comments');
//             const {data} = res;
//             this.setState({
//                 notes: data
//             })
//         } catch (e){
//             console.log(e);
//         }
        
//     }
//     addNote = note => {
//         this.setState({
//             notes: [...this.state.notes, note]
//         });
//     };
//     removeNote = id => {
//         // console.log(id);
//         this.setState({
//             notes: this.state.notes.filter(note => note.id !== id)
//         });
//     };
//     render(){
//         return(
//             <NoteContext.Provider value={{
//                 notes: this.state.notes,
//                 addNote: this.addNote,
//                 removeNote: this.removeNote
//                 }}>
//                 {this.props.children}

//             </NoteContext.Provider>
//         )
//     }
// }

export const NoteContext = createContext();