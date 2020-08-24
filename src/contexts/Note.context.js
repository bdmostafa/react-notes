import React, { Component, createContext } from 'react';


export class NoteProvider extends Component {
    state = {
        notes: [
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
        ]
    };
    addNote = note => {
        this.setState({
            notes: [...this.state.notes, note]
        });
    };
    removeNote = id => {
        console.log(id)
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    };
    render(){
        return(
            <NoteContext.Provider value={{
                notes: this.state.notes,
                addNote: this.addNote,
                removeNote: this.removeNote
                }}>
                {this.props.children}

            </NoteContext.Provider>
        )
    }
}



export const NoteContext = createContext();