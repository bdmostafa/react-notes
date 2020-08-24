import React, { Component } from 'react';
import { NoteContext } from '../contexts/Note.context';
import axios from 'axios';

class Note extends Component {
    static contextType = NoteContext;
    handleRemove = async id => {
        try {
            await axios
            .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
            this.context.removeNote(id);
        } catch (e) {
            console.log(e);
        }

    }
    render(){
        const { id, name: title, body: description } = this.props.note;
        // console.log(id);
        
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-secondary" onClick={() => this.handleRemove(id)}>
                        Remove
                    </button>
                </div>
            </div>
    
        )
    }
    
    
}

export default Note;