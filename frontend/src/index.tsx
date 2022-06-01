import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const rootEl = document.getElementById('root');
const root =  createRoot(rootEl!);

root.render(
    <Router>
        <App />
    </Router>,
);