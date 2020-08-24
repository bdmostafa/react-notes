import React from 'react';

const Note = props => {
    // console.log(props.note);
    const { id, title, description } = props.note;
    // console.log(id);
    const handleRemove = id => {
        props.removeNote(id);
    }
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <button className="btn btn-secondary" onClick={() => handleRemove(id)}>
                    Remove
                </button>
            </div>
        </div>

    )
}

export default Note;