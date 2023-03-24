
import { Layout, Menu } from 'antd';
import './../assets/less/App.less';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ReactGA from 'react-ga';

import { BookIcon, LetterIcon, MapIcon, SettingsIcon } from './../components/icons/CustomIcon';

// import theRing from '../assets/img/logos/logo-menu2.png';

const { Sider } = Layout;

const collapseWidth = {
    ['min_width' as any]: '100px',
};

export const Navigation = (props: any) => {
    const [collapsed, setCollapsed] = useState(true);
    const [selectedKeys, setSelectedKeys] = useState(['map']);

    return (
        <div id="sideBar" className={collapsed ? 'collapsedSidebar' : 'sidebar'}>
            <Sider
                reverseArrow={true}
                collapsedWidth={90}
                width={225}
                collapsible
                collapsed={collapsed}
                onMouseOver={()=>setCollapsed(false)}
                onMouseOut={()=>setCollapsed(true)}>
                {/* <img src={theRing} className="website-logo"/> */}
                <Menu
                    selectedKeys={selectedKeys}
                    theme="dark"
                    mode="inline"
                    onClick={
                        (menuItem) => {
                            setSelectedKeys([menuItem.key]);
                        }
                    }
                >
                    {/* The order of these items is flipped */}
                    <Menu.Item key="credits" onClick={() =>ReactGA.pageview('/credits')} icon={<BookIcon />}>
                        <Link to="credits">
                        Credits
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="source" onClick={() =>ReactGA.pageview('/settings')} icon={<SettingsIcon />}>
                        <Link to="source">
                        Settings
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="feedback" onClick={() =>ReactGA.pageview('/feedback')} icon={<LetterIcon />}>
                        <Link to="feedback">
                        Feedback
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="map"  onClick={() =>ReactGA.pageview('/map')} icon={<MapIcon />}>
                        <Link to="map">
                        Map
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    );
};