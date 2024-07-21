import * as util from 'util';

import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import L, { CRS, LatLngBounds, LatLngBoundsExpression } from 'leaflet';
import { useState } from 'react';
import './../../assets/less/App.less';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


import { AGO_MAP_URL, AGO_MAP_X, AGO_MAP_Y, CREAPER_MAP_URL, CREAPER_MAP_X, CREAPER_MAP_Y, DAC_MAP_URL, DAC_MAP_X, DAC_MAP_Y, JARED_MAP_URL, JARED_MAP_X, JARED_MAP_Y, MAP_URL, MAP_X, MAP_Y } from '../../lib/constants';
import { iconLOTR } from '../widgets/Icon';
import { LotrSpinner } from '../widgets/Spinner';
import { getMapLocation as getMapMarkers, getXyCoords, log } from '../../lib/utils';
import { MapLocation } from '../../lib/interfaces';


interface mapProps {
    mapType: string;
}

export const LOTRMap = (props: mapProps) => {
    const [mapIsLoaded, setMapIsLoaded] = useState(false);
    const [myMarkers, setMyMarkers] = useState(L.layerGroup());
    const mapMarkers = getMapMarkers(props.mapType);
    let mapUrl = '';
    let mapX = 0;
    let mapY = 0;

    switch (props.mapType) {
        case 'default':
            mapUrl = MAP_URL;
            mapX = MAP_X;
            mapY = MAP_Y;
            break;
        case 'siu_dac':
            mapUrl = MAP_URL;
            mapX = MAP_X;
            mapY = MAP_Y;
            break;
        case 'siu_ago':
            mapUrl = AGO_MAP_URL;
            mapX = AGO_MAP_X;
            mapY = AGO_MAP_Y;
            break;
        case 'creaperbox':
            mapUrl = CREAPER_MAP_URL;
            mapX = CREAPER_MAP_X;
            mapY = CREAPER_MAP_Y;
            break;
        case 'jared':
            mapUrl = JARED_MAP_URL;
            mapX = JARED_MAP_X;
            mapY = JARED_MAP_Y;
            break;
        default:
            mapUrl = MAP_URL;
            mapX = MAP_X;
            mapY = MAP_Y;
            break;
    }

    if (props.mapType === 'default') {
        mapUrl = MAP_URL;
        mapX = MAP_X;
        mapY = MAP_Y;
    }
    else if (props.mapType === 'siu_dac') {
        mapUrl = DAC_MAP_URL;
        mapX = DAC_MAP_X;
        mapY = DAC_MAP_Y;
    } else {
        mapUrl = MAP_URL;
        mapX = MAP_X;
        mapY = MAP_Y;
    }

    const mapBounds: LatLngBoundsExpression = new LatLngBounds([0, 0], [mapY, mapX]);


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
            console.info(mapBounds);

            const cords = getXyCoords(e.latlng.toString());
            const roundedCoords: number[] = [];

            cords.forEach(element => {
                const roundedCoord = Math.round(parseInt(element, 10));

                roundedCoords.push(roundedCoord);
            });

            require('child_process').spawn('clip').stdin.end(util.inspect(roundedCoords.toString()));


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
                        url={mapUrl}
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