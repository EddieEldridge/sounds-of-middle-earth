import './../../assets/less/App.less';
import '../../assets/less/StandardLayout.less';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export const Source = (props: any) => {
    return (
        <Layout className="layout">
            <Header className="header">Settings</Header>
            <div id="mapBackground" >
                <Content className="content">
                    <div id="glow">
                        <h2>Coming Soon</h2>
                    </div>
                </Content>
            </div>
            <Footer className="footer"></Footer>
        </Layout>
    );
};