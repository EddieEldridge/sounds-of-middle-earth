import { Layout } from 'antd';
import React from 'react';
import './../../assets/scss/App.scss';
import '../../assets/scss/StandardLayout.scss';

const { Header, Footer, Content } = Layout;

export const Credits = (props: any) => {
    return (
        <Layout className='layout'>
            <Header className='header'>Credits</Header>
            <Content className='content'>Coming Soon</Content>
            <Footer className='footer'>LOTR Quote</Footer>
        </Layout>
    );
};