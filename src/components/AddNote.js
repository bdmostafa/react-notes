import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
// const { v4: uuidv4 } = require('uuid');
import classNames from 'classnames';
import { NoteContext } from '../contexts/Note.context';
import Axios from 'axios';

class AddNote extends Component{
    static contextType = NoteContext;
    state = {
        id: uuidv4(),
        title: '',
        description: '',
        errors: {}
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = async e => {
        e.preventDefault();
        if(this.state.title === ''){
            this.setState({
                errors: {
                    ...this.state.errors,
                    title: 'please provide title'
                }
            });
            return;
        }
        if (this.state.description === ''){
            this.setState({
                errors: {
                    ...this.state.errors,
                    title: '',
                    description: 'please provide description'
                }
            });
            return;
        }
        try{
            const res = await Axios.post('https://jsonplaceholder.typicode.com/comments', {
                name: this.state.title,
                body: this.state.description,
            })
            // console.log(res);
            const {data} = res;
            // this.context.addNote(this.state);
            this.context.addNote(data);
            this.props.history.push('/');

        } catch (e) {
            console.log(e);
        }
        // this.setState({
        //     id: '',
        //     title: '',
        //     description: '',
        //     errors: {}
        // });
    };
    // handleDescriptionChange = e => {
    //     this.setState({
    //       description: e.target.value
    //     });
    //   };
    render(){
        return(
            <>
                <h3>Add Note</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        {/* <input type="text" name="title" className="form-control is-invalid" id="title" value={this.state.title} onChange={this.handleChange}/> */}
                        <input type="text" name="title" className={classNames('form-control', !!this.state.errors.title && 'is-invalid')} id="title" value={this.state.title} onChange={this.handleChange}/>
                        <div className="invalid-feedback">Title must be required</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        {/* <textarea id="description" name="description" value={this.state.description} className="form-control" onChange={this.handleChange}/> */}
                        <textarea id="description" name="description" value={this.state.description} className={classNames('form-control', !!this.state.errors.description && 'is-invalid')} onChange={this.handleChange}/>
                        <div className="invalid-feedback">Description must be required</div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default AddNote;