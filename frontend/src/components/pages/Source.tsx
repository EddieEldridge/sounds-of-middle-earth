import React from 'react';
import './../../assets/less/App.less';
import '../../assets/less/StandardLayout.less';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export const Source = (props: any) => {
    return (
        <Layout className='layout'>
            <Header className='header'>Source</Header>
            <Content className='content'>
                This application was written with
            </Content>
            <Footer className='footer'>LOTR Quote</Footer>
        </Layout>
    );
};