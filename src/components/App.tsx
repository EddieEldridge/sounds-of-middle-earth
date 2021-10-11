import * as React from 'react';
import { hot } from 'react-hot-loader';

import './../assets/scss/App.scss';
import { LOTRMap } from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './Navigation';
import { About } from './About';
import { Source } from './Source';
import { Credits } from './Credits';
import { Contribute } from './Contribute';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component<Record<string, unknown>, undefined> {
    public render() {
        return (
            <div className="App">
                <div id='navBar'>
                    <Navigation />
                </div>
                    <Switch>
                        <Route exact path='/' component={LOTRMap} />
                        <Route path='/home' component={LOTRMap} />
                        <Route path='/about' component={About} />
                        <Route path='/source' component={Source} />
                        <Route path='/credits' component={Credits} />
                        <Route path='/contribute' component={Contribute} />
                    </Switch>
            </div>
        );
    }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
