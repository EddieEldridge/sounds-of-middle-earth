import React from 'react';
import './../../assets/scss/App.scss';
import '../../assets/scss/StandardLayout.scss';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export const Source = (props: any) => {
    return (
        <Layout className='layout'>
            <Header className='header'>Source</Header>
            <Content className='content'>
                <iframe src="https://github.com/EddieEldridge/sounds-of-middle-earth"></iframe>
            </Content>
            <Footer className='footer'>LOTR Quote</Footer>
        </Layout>
    );
};