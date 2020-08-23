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



