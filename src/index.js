import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <div style={{ backgroundColor:'#e9ecef', backgroundSize: "cover", height: "100vh"}}>
        <App />
    </div>,
    document.getElementById('root')
);