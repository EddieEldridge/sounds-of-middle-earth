import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

const rootEl = document.getElementById('root');

render(
    <Router>
        <App />
    </Router>,
    rootEl);