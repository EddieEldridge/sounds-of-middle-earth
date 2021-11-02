import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import L, { CRS, LatLngBounds } from 'leaflet';
import { useState } from 'react';
import './../assets/scss/App.scss';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const mapBounds = new LatLngBounds([0, 0], [1500, 1800]);

export const LOTRMap = (props: any) => {
    const [map, setMap] = useState(undefined);
    const [myMarkers, setMyMarkers] = useState(L.layerGroup());

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const setMapReference = (map) => {
        setMap(map);

        myMarkers.addTo(map);
        setMyMarkers(myMarkers);
        map.fitBounds(mapBounds);
    };

    return (
        <div id='mainMap'>
            <div id="mapid">
                <MapContainer
                    center={[0, 0]}
                    whenCreated={setMapReference}
                    minZoom={-5}
                    crs={CRS.Simple}>
                    <ImageOverlay
                        url="https://i.pinimg.com/originals/bc/59/91/bc5991a551a011777e72aefa7e914ba8.jpg"
                        bounds={mapBounds}
                        zIndex={-1}
                    />
                    <Marker position={[430.505, 1150.09]}>
                        <Popup>
                            <LiteYouTubeEmbed
                                id="_o7gHiAIYkA"
                                title="LOTRO | House of Healing Music And Ambience | Minas Tirith"
                                autoplay={true}
                            />
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};