import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import L, { CRS, LatLngBounds, LatLngBoundsExpression } from 'leaflet';
import { useState } from 'react';
import './../../assets/less/App.less';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


import { MAP_URL, MAP_X, MAP_Y } from '../../lib/constants';
import { iconLOTR } from '../widgets/Icon';
import { LotrSpinner } from '../widgets/Spinner';
import { getMapLocation as getMapMarkers, getXyCoords, log } from '../../lib/utils';
import { MapLocation } from '../../lib/interfaces';

const mapBounds: LatLngBoundsExpression = new LatLngBounds([0, 0], [MAP_Y, MAP_X]);
const padding: LatLngBoundsExpression = new LatLngBounds([150, 150], [150, 150]);
// const maxMapBounds: LatLngBoundsExpression = new LatLngBounds(
//     [(MAP_Y/2), (MAP_X/2)],
//     [MAP_Y+(MAP_Y/3),
//         MAP_X+(MAP_X/3)]);

export const LOTRMap = (props: any) => {
    const [mapIsLoaded, setMapIsLoaded] = useState(false);
    const [myMarkers, setMyMarkers] = useState(L.layerGroup());
    const mapMarkers = getMapMarkers();

    const setMapReference = (map: L.Map) => {
        if (!map) {
            log('Map not ready yet...', 'yellow');

            return;
        }

        // Set the map bounds to the map size
        myMarkers.addTo(map);
        setMyMarkers(myMarkers);

        // Getting map co-ordinates on click
        const popup = L.popup();

        function onMapClick(e: { latlng: L.LatLngExpression }) {
            const cords = getXyCoords(e.latlng.toString());
            const roundedCoords: number[] = [];

            cords.forEach(element => {
                const roundedCoord = Math.round(parseInt(element, 10));

                roundedCoords.push(roundedCoord);
            });

            popup
                .setLatLng(e.latlng)
                .setContent(`
                You clicked the map at ${roundedCoords.toString()}
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

    // Map Props
    //  {
    //     doubleClickZoom: false,
    //     closePopupOnClick: false,
    //     dragging: false,
    //     zoomSnap: false,
    //     zoomDelta: false,
    //     trackResize: false,
    //     touchZoom: false,
    //     scrollWheelZoom: false
    //   }

    return (
        <div id='mapBackground'>
            <div id="mapContainer">
                <MapContainer
                    zoomControl={false}
                    id="lotrMap"
                    bounds={mapBounds}
                    maxBounds={mapBounds}
                    maxBoundsViscosity={100}
                    scrollWheelZoom={true}
                    zoomAnimation={true}
                    center={mapBounds.getCenter()}
                    zoomSnap={0.2}
                    zoomDelta={0.2}
                    maxZoom={-0.5}
                    minZoom={-3}
                    zoom={-1}
                    wheelDebounceTime={0.3}
                    wheelPxPerZoomLevel={120}
                    ref={async (map) => {
                        if(map) {
                            setMapReference(map);
                        }
                    }}
                    whenReady={async () => setMapIsLoaded(true)}
                    crs={CRS.Simple}
                >
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
                                <Popup
                                    className='video-popup'
                                    keepInView={true}
                                >
                                    <LiteYouTubeEmbed
                                        poster="maxresdefault"
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