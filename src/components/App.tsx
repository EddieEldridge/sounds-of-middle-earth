import * as React from 'react';
import { hot } from 'react-hot-loader';

import './../assets/scss/App.scss';
import { LOTRMap } from './Map';

class App extends React.Component<Record<string, unknown>, undefined> {
    public render() {
        return (
            <div className="app">
                <h1>Sounds of Middle-Earth</h1>
                <p>An interactive map of Tolkien's Middle-earth that provides you the songs and sounds of a particular region.</p>
                <LOTRMap />
            </div>
        );
    }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
