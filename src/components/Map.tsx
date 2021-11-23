import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import L, { CRS, LatLngBounds } from 'leaflet';
import { useState } from 'react';
import './../assets/scss/App.scss';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { MAP_URL, MAP_X, MAP_Y } from '../lib/constants';
import { iconLOTR } from './Icon';
import { getMapLocation } from '../lib/utils';
import { MapLocation } from '../lib/interfaces';

const mapBounds = new LatLngBounds([0, 0], [MAP_Y, MAP_X]);

export const LOTRMap = (props: any) => {
    const [map, setMap] = useState(undefined);
    const [myMarkers, setMyMarkers] = useState(L.layerGroup());
    const mapMarkers = getMapLocation();

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
                    minZoom={-25}
                    crs={CRS.Simple}>
                    <ImageOverlay
                        url={MAP_URL}
                        bounds={mapBounds}
                        zIndex={-1}
                    />
                    {mapMarkers.map((marker: MapLocation) =>{
                        return(
                            <Marker icon={iconLOTR} position={marker.location}>
                                <Popup>
                                    <LiteYouTubeEmbed
                                        id={marker.url}
                                        title={marker.name}
                                        autoplay={true}
                                    />
                                </Popup>
                            </Marker>
                        );
                    })}

                </MapContainer>
            </div>
        </div>
    );
};