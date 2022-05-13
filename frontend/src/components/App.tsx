import * as React from 'react';
import './../assets/scss/App.scss';
import '../assets/less/theme.less';
import { Route, Routes } from 'react-router-dom';
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
                            <Routes>
                                <Route exact path='/' element={<LOTRMap/>} />
                                <Route path='/map' element={<LOTRMap/>} />
                                <Route path='/feedback' element={<Feedback/>} />
                                <Route path='/source' element={<Source/>} />
                                <Route path='/credits' element={<Credits/>} />
                            </Routes>
                        </Layout>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default App;