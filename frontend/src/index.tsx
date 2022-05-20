import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';

import App from './components/App';

const rootEl = document.getElementById('root');
const root =  createRoot(rootEl!); // createRoot(container!) if you use TypeScript

root.render(
    <Router>
        <App />
    </Router>,
);