// Iport local package from scratch, not global package
import React from 'react';
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
// class based component
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

const Note = (props) => {
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

const Notes = () => {
    return (
        <div>
            <Note title="Note 1" description="Note 1 description"/>
            <Note title="Note 1" description="Note 1 description" />
            <Note title="Note 1" description="Note 1 description" />
        </div>
    )
}


const App = () => {
    return(
        <div className="container">
            <Header />
            <Notes />
            <Footer />
        </div>
        
    )
}

ReactDom.render(<App />, document.getElementById('root'));