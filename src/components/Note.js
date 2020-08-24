import React, { Component } from 'react';
import { NoteContext } from '../contexts/Note.context';

// const Note = props => {
//     console.log(props.note);
//     const { id, title, description } = props.note;
//     // console.log(id);
//     const handleRemove = id => {
//         props.removeNote(id);
//     }
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <h3 className="card-title">{title}</h3>
//                 <p className="card-text">{description}</p>
//                 <button className="btn btn-secondary" onClick={() => handleRemove(id)}>
//                     Remove
//                 </button>
//             </div>
//         </div>

//     )
// }

class Note extends Component {
    static contextType = NoteContext;
    handleRemove = id => {
        this.context.removeNote(id);
    }
    render(){
        const { id, title, description } = this.props.note;
        console.log(id);
        
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