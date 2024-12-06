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
                    <h2>My most sincere and genuine thanks to</h2>
                    <ul>
                        <li><a href="https://www.youtube.com/channel/UC4yJ5i9YkhahKCd1KH6xAyg" className="goldenHostLink">The Golden Host</a></li>
                        <li><a href="https://www.youtube.com/channel/UCjrlJLts89CTTqRD4B6vGxQ" className="lotroCollectionLink">LOTRO: Soundtrack Collection</a></li>
                        <li><a href="https://www.youtube.com/c/AmbientWorlds" className="ambientWorldsLink">Ambient Worlds</a></li>
                    </ul>
                    <br></br>
                    <p>My thanks also go to <a href="https://mistybeee.com/">MistyBee </a> for the original map which was originally posted <a href="https://www.cartographersguild.com/showthread.php?t=41011">here.</a></p>
                    <p>My thanks also go to <a href="https://jaredblando.com/">Jared Blando </a> for the amazing map, which is currently used which you can purchase <a href="https://jaredblando.com/prints/middle-earth-the-lands-and-regions-of-the-lotr">here.</a></p>
                    <p>I'd also like to thank all the other creators of the various other channels who also created ambient videos, as well as the creators of React Leaflet and Leaflet for their awesome libraries.</p>
                </Content>
            </div>
            <Footer className='footer'></Footer>
        </Layout>
    );
};