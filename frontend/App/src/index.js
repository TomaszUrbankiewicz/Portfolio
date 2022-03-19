import React from 'react';
import ReactDOM from 'react-dom';
import './resources/scss/index.scss';


const App = () => {
    return (
        <>
            <h1>Witam na mojej stronie</h1>
            <p>Nazywam się Tomek</p>
        </>
    );
};
ReactDOM.render(<App/>, document.getElementById('app'));