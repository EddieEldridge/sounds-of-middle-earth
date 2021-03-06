import './../../assets/less/App.less';
import '../../assets/less/StandardLayout.less';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export const Source = (props: any) => {
    return (
        <Layout className='layout'>
            <Header className='header'>Source</Header>
            <Content className='content'>
                Coming Soon
            </Content>
            <Footer className='footer'></Footer>
        </Layout>
    );
};