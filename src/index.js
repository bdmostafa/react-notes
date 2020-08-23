// Iport local package from scratch, not global package
import React, {Component} from 'react';
import ReactDom from 'react-dom';

// Not JSX, using React.createElement
// const result = React.createElement('h1', {}, 'Hello React World!');

// Using JSX - (JavaScript Syntax Extension)
// Can be used variable expression in {...}, not statement
const ouput = (
<div>
    {/* Attribute in react, not like a html attribute because it is JSX */}
    <h1 className="heading">Hello React World!</h1>
    <label htmlFor="name">Name</label>
    <p>This is p</p>
    <p>1 + 1</p>
    <p>{1 + 1}</p>
    <img src="" />
</div>
);
// Rendering
ReactDom.render(ouput, document.getElementById('root'));


// Components - 2 types (functional and class based)
// Rendering some code by function (functional component)
// class based component (old way, most used way)
const Output = () => {
    return (
        <div>
            <h1 className="heading">Hello React World!</h1>
            <label htmlFor="name">Name</label>
            <p>From functional component</p>
            <img src="" />
        </div>
    )
}
ReactDom.render(<Output />, document.getElementById('root'));



const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">React Notes App</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add Notes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Help</a>
            </li>
          </ul>
      </nav>
    )
}

const Footer = () => {
    return (
        <p className="text-center text-muted">&copy; All Rights Reserved 2020. Developed by <a href="https://github.com/bdmostafa">Mostafa</a></p>
    )
}

const Note = props => {
    // console.log(props.title);
    const {title, description} = props;
    return (
        <div className="card">
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>

    )
}

const Notes = props => {
    const {notes} = props;
    return (
        <div>
            {notes.map(note => <Note key={note.id} title={note.title} description={note.description}/>)}
        </div>
    )
}

// class based component
class App extends Component {
// If multiple child components like Notes, AddNotes share state, use state at their parent component like App instead of at child component
// Data will be changed here in state
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
}
    render(){
        return(
            <div className="container">
                <Header />
                <Notes notes={this.state.notes} />
                <Footer />
            </div>
            
        )
    }
}

// const App = () => {
//     return(
//         <div className="container">
//             <Header />
//             <Notes />
//             <Footer />
//         </div>
        
//     )
// }

ReactDom.render(<App />, document.getElementById('root'));