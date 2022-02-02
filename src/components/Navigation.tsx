
import { Layout, Menu } from 'antd';
// eslint-disable-next-line import/order
import React, { useState } from 'react';
import './../assets/scss/App.scss';

import {
    BranchesOutlined,
    GlobalOutlined,
    HeartOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import theRing from '../assets/img/LOTRIcon.png';


const { Sider } = Layout;

export const Navigation = (props: any) => {
    const [collapsed, toggleCollapsed] = useState(true);
    const [selectedKeys, setSelectedKeys] = useState(['map']);

    const toggleMenu = () => {
        if(collapsed) {
            toggleCollapsed(false);
        } else {
            toggleCollapsed(true);
        }
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggleMenu} onMouseOver={toggleMenu} onMouseOut={toggleMenu}>
            <img src={theRing} className="website-logo"/>
            <Menu
                id="sideBar"
                selectedKeys={selectedKeys}
                theme="dark"
                mode="inline"
                onClick={
                    (menuItem) => {
                        setSelectedKeys([menuItem.key]);
                    }
                }
            >
                <Menu.Item key="map" icon={<GlobalOutlined />}>
                    <Link to="map">
                        Map
                    </Link>
                </Menu.Item>
                <Menu.Item key="credits" icon={<HeartOutlined />}>
                    <Link to="credits">
                        Credits
                    </Link>
                </Menu.Item>
                <Menu.Item key="source" icon={<BranchesOutlined />}>
                    <Link to="source">
                        Source
                    </Link>
                </Menu.Item>
                <Menu.Item key="feedback" icon={<MailOutlined />}>
                    <Link to="feedback">
                        Feedback
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};