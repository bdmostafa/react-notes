import React from 'react';
import ReactDom from 'react-dom';

const result = React.createElement('h1', {}, 'Hello React World!');

ReactDom.render(result, document.getElementById('root'));