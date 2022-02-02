import * as React from 'react';
import { hot } from 'react-hot-loader';
import './../assets/scss/App.scss';
import '../assets/less/theme.less';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import { LOTRMap } from './pages/Map';
import { Feedback } from './pages/Feedback';
import { Source } from './pages/Source';
import { Credits } from './pages/Credits';
import { Navigation } from './Navigation';

class App extends React.Component<Record<string, unknown>, undefined> {
    public render() {
        return (
            <div className="App">
                <Layout style={{ minHeight: '100vh' }}>
                    <Navigation/>
                    <div id="content">
                        <Layout className="site-layout">
                            <Switch>
                                <Route exact path='/' component={LOTRMap} />
                                <Route path='/map' component={LOTRMap} />
                                <Route path='/feedback' component={Feedback} />
                                <Route path='/source' component={Source} />
                                <Route path='/credits' component={Credits} />
                            </Switch>
                        </Layout>
                    </div>
                </Layout>
            </div>
        );
    }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);