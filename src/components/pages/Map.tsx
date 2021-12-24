import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import L, { CRS, LatLngBounds } from 'leaflet';
import { useState } from 'react';
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
    const [map, setMap] = useState(undefined);
    const [mapIsLoaded, setMapIsLoaded] = useState(false);
    const [myMarkers, setMyMarkers] = useState(L.layerGroup());
    const mapMarkers = getMapLocation();

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const setMapReference = (map) => {
        setMap(map);

        myMarkers.addTo(map);
        setMyMarkers(myMarkers);
        map.fitBounds(mapBounds);

        // Getting map co-ordinates on click
        const popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent('You clicked the map at ' + e.latlng.toString())
                .openOn(map);
        }
        map.on('click', onMapClick);
    };

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
                    whenCreated={setMapReference}
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
                            <Marker icon={iconLOTR} position={marker.location}>
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