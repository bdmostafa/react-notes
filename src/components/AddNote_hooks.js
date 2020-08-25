import React, {useState, useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
// const { v4: uuidv4 } = require('uuid');
import classNames from 'classnames';
import { NoteContext } from '../contexts/Note.context';
import Axios from 'axios';

// Functional component
const AddNote = props => {
    const context = useContext(NoteContext);
    const [note, setNote] = useState({
            id: uuidv4(),
            title: '',
            description: '',
            errors: {}
    });


    const handleChange = e => {
        setNote({
            // Existing note like id, errors
            ...note,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        if(note.title === ''){
            setNote({
                ...note,
                errors: {
                    ...note.errors,
                    title: 'please provide title'
                }
            });
            return;
        }
        if (note.description === ''){
            setNote({
                errors: {
                    ...note.errors,
                    title: '',
                    description: 'please provide description'
                }
            });
            return;
        }
        try{
            const res = await Axios.post('https://jsonplaceholder.typicode.com/comments', {
                name: note.title,
                body: note.description,
            })
            // console.log(res);
            const {data} = res;
            // context.addNote(note);
            context.addNote(data);
            props.history.push('/');

        } catch (e) {
            console.log(e);
        }
    };
    return(
        <>
            <h3>Add Note</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className={classNames('form-control', !!note.errors.title && 'is-invalid')} id="title" value={note.title} onChange={handleChange}/>
                    <div className="invalid-feedback">Title must be required</div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={note.description} className={classNames('form-control', !!note.errors.description && 'is-invalid')} onChange={handleChange}/>
                    <div className="invalid-feedback">Description must be required</div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddNote;