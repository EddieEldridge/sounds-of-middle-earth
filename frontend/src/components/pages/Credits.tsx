import { Layout } from 'antd';
import './../../assets/less/App.less';
import '../../assets/less/StandardLayout.less';

const { Header, Footer, Content } = Layout;

export const Credits = (props: any) => {
    return (
        <Layout className='layout'>
            <Header className='header'>Credits</Header>
            <div id="mapBackground" >
                <Content className="content">
                    <h2>My most sincere and genuine thanks goes to</h2>
                    <ul>
                        <li><a href="https://www.youtube.com/channel/UC4yJ5i9YkhahKCd1KH6xAyg" className="goldenHostLink">The Golden Host</a></li>
                        <li><a href="https://www.youtube.com/channel/UCjrlJLts89CTTqRD4B6vGxQ" className="lotroCollectionLink">LOTRO: Soundtrack Collection</a></li>
                        <li><a href="https://www.youtube.com/c/AmbientWorlds" className="ambientWorldsLink">Ambient Worlds</a></li>
                    </ul>
                    <br></br>
                    <br></br>
                    <p>My thanks also go to <strong>MistyBee</strong> for the amazing map which was originally posted <a href="https://www.cartographersguild.com/showthread.php?t=41011">here.</a></p>
                    <br></br>
                    <p>I'd also like to thank all the other creators of the various other channels who also created ambient videos, as well as the creators of React Leaflet and Leaflet for their awesome libraries and the creators of Waifu2K for allowing a brilliant upscale of the original map.</p>
                </Content>
            </div>
            <Footer className='footer'></Footer>
        </Layout>
    );
};