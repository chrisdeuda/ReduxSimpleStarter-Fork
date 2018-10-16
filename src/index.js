import React from 'react';
import ReactDOM from 'react-dom';

// Create component. This component should some HTML
const App = function (){
    return <div> Hi !</div>;
}

// Take this component's generated HTML and put it 
// on the page
ReactDOM.render( <App />, document.querySelector(".container"));