import React from 'react';

const Note = props => {
    // console.log(props.title);
    const {title, description} = props;
    return (
        <div className="card">
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn btn-secondary">Remove</button>
            </div>
        </div>

    )
}

export default Note;