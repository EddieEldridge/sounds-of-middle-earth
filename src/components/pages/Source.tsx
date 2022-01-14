import React from 'react';
import './../../assets/scss/App.scss';
import '../../assets/scss/StandardLayout.scss';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export const Source = (props: any) => {
    return (
        <Layout className='layout'>
            <Header className='header'>Coming Soon</Header>
            <Content className='content'>Coming Soon</Content>
            <Footer className='footer'>Coming Soon</Footer>
        </Layout>
    );
};