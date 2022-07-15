import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import L, { CRS, LatLngBounds, LatLngBoundsExpression } from 'leaflet';
import { useState } from 'react';
import './../../assets/less/App.less';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


import { MAP_URL, MAP_X, MAP_Y } from '../../lib/constants';
import { iconLOTR } from '../widgets/Icon';
import { LotrSpinner } from '../widgets/Spinner';
import { getMapLocation, getXyCoords, log } from '../../lib/utils';
import { MapLocation } from '../../lib/interfaces';

const mapBounds: LatLngBoundsExpression = new LatLngBounds([0, 0], [MAP_Y, MAP_X]);

export const LOTRMap = (props: any) => {
    // const [map, setMap] = useState(undefined);
    const [mapIsLoaded, setMapIsLoaded] = useState(false);
    const [myMarkers, setMyMarkers] = useState(L.layerGroup());
    const mapMarkers = getMapLocation();

    const setMapReference = (map: L.Map) => {
        // setMap(map);

        if (!map) {
            log('Map not ready yet...', 'yellow');

            return;
        }

        // Set the map bounds to the map size
        myMarkers.addTo(map);
        setMyMarkers(myMarkers);
        // map.fitBounds(mapBounds);
        map.setView([MAP_Y / 4, MAP_X / 1.5], 1);
        map.zoomIn(0.5);
        map.zoomOut(0.5);

        // Getting map co-ordinates on click
        const popup = L.popup();

        function onMapClick(e: { latlng: L.LatLngExpression }) {
            popup
                .setLatLng(e.latlng)
                .setContent(`
                You clicked the map at ${getXyCoords(e.latlng.toString())}
                `)
                .openOn(map);
        }
        map.on('click', onMapClick);
    };

    const spinnerOverlay = () => {
        if (!mapIsLoaded) {
            log('Loading map...', 'yellow');

            return <LotrSpinner />;
        }

        log('Map is loaded...', 'green');
    };

    return (
        <div id='mainMap'>
            <div id="mapContainer">
                <MapContainer
                    center={[0, 0]}
                    ref={async (map) => {
                        if(map) {
                            setMapReference(map);
                        }
                    }}
                    whenReady={async () => setMapIsLoaded(true)}
                    minZoom={-100}
                    crs={CRS.Simple}>
                    <ImageOverlay
                        eventHandlers={{
                            loading: (e) => {
                                setMapIsLoaded(false);
                            },
                            load: (e) => {
                                setMapIsLoaded(true);
                            }
                        }}
                        url={MAP_URL}
                        bounds={mapBounds}
                        zIndex={-1}
                    />
                    {mapMarkers.map((marker: MapLocation) => {
                        return (
                            <Marker
                                title={marker.name}
                                alt={marker.name}
                                riseOnHover={true}
                                icon={iconLOTR}
                                position={marker.location}
                            >
                                <Popup className='marker-popup'>
                                    <LiteYouTubeEmbed
                                        id={marker.url}
                                        title={marker.name}
                                        autoplay={true}
                                        muted={false}
                                    />
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
                {spinnerOverlay()}
            </div>
        </div>
    );
};