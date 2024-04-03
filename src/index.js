// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './assets/styles/reset.css';
// import './assets/styles/style.css';

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

import App from './App';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
