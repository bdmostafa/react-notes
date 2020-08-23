import React, {Component} from 'react';

class AddNote extends Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" name="" className="form-control" id=""/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Description</label>
                    <textarea className="form-control"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddNote;