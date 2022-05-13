import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import L, { CRS, LatLngBounds } from 'leaflet';
import { useState, useRef, useEffect } from 'react';
import './../../assets/scss/App.scss';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


import { MAP_URL, MAP_X, MAP_Y } from '../../lib/constants';
import { iconLOTR } from '../widgets/Icon';
import { LotrSpinner } from '../widgets/Spinner';
import { getMapLocation, log } from '../../lib/utils';
import { MapLocation } from '../../lib/interfaces';

const mapBounds = new LatLngBounds([0, 0], [MAP_Y, MAP_X]);

export const LOTRMap = (props: any) => {
    // const [map, setMap] = useState(undefined);
    const mapRef = useRef(null);
    const [mapIsLoaded, setMapIsLoaded] = useState(false);
    const [myMarkers, setMyMarkers] = useState(L.layerGroup());
    const mapMarkers = getMapLocation();

    useEffect(() => {
        const map = mapRef.current.leafletElement;
        const bounds = [[-26.5, -25], [1021.5, 1023]];
        const image = L.imageOverlay('https://i.imgur.com/Ion6X7C.jpg', mapBounds).addTo(
            map
        );

        // this is what you were looking for
        map.fitBounds(image.getBounds());
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-shadow
    // const setMapReference = (map) => {
    //     log(map);
    //     setMap(map);

    //     myMarkers.addTo(map);
    //     setMyMarkers(myMarkers);
    //     map.fitBounds(mapBounds);

    //     // Getting map co-ordinates on click
    //     const popup = L.popup();

    //     function onMapClick(e) {
    //         popup
    //             .setLatLng(e.latlng)
    //             .setContent(`
    //             You clicked the map at ${getXyCoords(e.latlng.toString())}
    //             `)
    //             .openOn(map);
    //     }
    //     map.on('click', onMapClick);
    // };

    const spinnerOverlay = () => {
        if(!mapIsLoaded) {
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
                    whenReady={async () => await setMapIsLoaded(true)}
                    minZoom={-25}
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
                    {mapMarkers.map((marker: MapLocation) =>{
                        return(
                            <Marker title={marker.name} alt= {marker.name} riseOnHover={true} icon={iconLOTR} position={marker.location}>
                                <Popup className='marker-popup'>
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
                {spinnerOverlay()}
            </div>
        </div>
    );
};