import { Layout } from 'antd';
import './../../assets/less/App.less';
import '../../assets/less/StandardLayout.less';

const { Header, Footer, Content } = Layout;

export const Credits = (props: any) => {
    return (
        <Layout className='layout'>
            <Header className='header'>Credits</Header>
            <Content className='content'>Coming Soon</Content>
            <Footer className='footer'></Footer>
        </Layout>
    );
};