import { Layout } from 'antd';
import './../../assets/less/App.less';
import '../../assets/less/StandardLayout.less';

const { Header, Footer, Content } = Layout;

export const Credits = (props: any) => {
    return (
        <Layout className='layout'>
            <Header className='header'>Credits</Header>
            <Content className='content'>
                <h2>My most sincere and genuine thanks goes to</h2>
                <ul>
                    <li><a href="#" className="goldenHostLink">The Golden Host</a></li>
                    <li><a href="#" className="lotroCollectionLink">LOTRO: Soundtrack Collection</a></li>
                    <li><a href="#" className="ambientWorldsLink">Ambient Worlds</a></li>
                </ul>
            </Content>
            <Footer className='footer'></Footer>
        </Layout>
    );
};