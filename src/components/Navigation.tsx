
import { Layout, Menu } from 'antd';
// eslint-disable-next-line import/order
import React, { useState } from 'react';
import './../assets/scss/App.scss';

import {
    BranchesOutlined,
    FileOutlined,
    GlobalOutlined,
    HeartOutlined,
} from '@ant-design/icons';

import theRing from '../assets/img/LOTRIcon.png';


const { Sider } = Layout;

export const Navigation = (props: any) => {
    const [collapsed, toggleCollapsed] = useState(true);

    const toggleMenu = () => {
        if(collapsed) {
            toggleCollapsed(false);
        } else {
            toggleCollapsed(true);
        }
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggleMenu}>
            <img src={theRing} className="website-logo"/>
            <Menu id="sideBar" theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<GlobalOutlined />}>
                    <a href="Home">
                        Map
                    </a>
                </Menu.Item>
                <Menu.Item key="2" icon={<HeartOutlined />}>
                    <a href="Credits">
                        Credits
                    </a>
                </Menu.Item>
                <Menu.Item key="3" icon={<BranchesOutlined />}>
                    <a href="Code">
                        Code
                    </a>
                </Menu.Item>
                <Menu.Item key="4" icon={<FileOutlined />}>
                    <a href="About">
                        About
                    </a>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};