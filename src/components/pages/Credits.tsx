import { Layout } from 'antd';
import React from 'react';
import './../../assets/scss/App.scss';
import '../../assets/scss/StandardLayout.scss';

const { Header, Footer, Content } = Layout;

export const Credits = (props: any) => {
    return (
        <Layout className='layout'>
            <Header className='header'>Coming Soon</Header>
            <Content className='content'>Coming Soon</Content>
            <Footer className='footer'>Coming Soon</Footer>
        </Layout>
    );
};