
import { Layout, Menu } from 'antd';
import './../assets/less/App.less';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div id="sideBar">
            <Sider
                reverseArrow={true}
                collapsedWidth={100}
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
                    <Menu.Item key="credits" icon={<BookIcon />}>
                        <Link to="credits">
                        Credits
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="source" icon={<SettingsIcon />}>
                        <Link to="source">
                        Settings
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="feedback" icon={<LetterIcon />}>
                        <Link to="feedback">
                        Feedback
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="map" icon={<MapIcon />}>
                        <Link to="map">
                        Map
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    );
};