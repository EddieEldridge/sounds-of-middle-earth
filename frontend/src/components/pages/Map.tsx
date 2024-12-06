import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import L, { CRS, LatLngBounds, LatLngBoundsExpression } from 'leaflet';
import { useCallback, useState } from 'react';
import './../../assets/less/App.less';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


import { OG_MAP_URL, NEW_MAP_URL, MAP_X, MAP_Y } from '../../lib/constants';
import { iconLOTR } from '../widgets/Icon';
import { LotrSpinner } from '../widgets/Spinner';
import { getMapMarkers, getXyCoords, log, } from '../../lib/utils';
import { MapLocation } from '../../lib/interfaces';

const mapBounds: LatLngBoundsExpression = new LatLngBounds([0, 0], [MAP_Y, MAP_X]);

// Function to update marker position
const updateMarkerPosition = (
    mapMarkers: MapLocation[],
    markerToUpdate: MapLocation,
    newPosition: L.LatLngExpression
): MapLocation[] => {
    return mapMarkers.map(marker =>
        marker === markerToUpdate
            ? { ...marker, location: newPosition }
            : marker
    );
};

export const LOTRMap = (props: any) => {
    const [mapIsLoaded, setMapIsLoaded] = useState(false);
    const [myMarkers, setMyMarkers] = useState(L.layerGroup());
    const initialMarkers = getMapMarkers(props.version);
    const [mapMarkers, setMapMarkers] = useState<MapLocation[]>(initialMarkers);


    let MAP_URL = '';

    if (props.version === 'og') {
        MAP_URL = OG_MAP_URL;
    } else {
        MAP_URL = NEW_MAP_URL;
    }

    const exportMapMarkers = () => {
        const jsonOutput = {
            locations: mapMarkers
        };

        const jsonString = JSON.stringify(jsonOutput, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const link = document.createElement('a');

        link.href = URL.createObjectURL(blob);
        link.download = 'map_markers.json';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleMarkerDrag = useCallback((marker: MapLocation) => {
        return (event: L.DragEndEvent) => {
            const newPosition = event.target.getLatLng();


            log(newPosition.toString());

            setMapMarkers(currentMarkers =>
                updateMarkerPosition(currentMarkers, marker, [newPosition.lat, newPosition.lng])
            );
        };
    }, []);

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
                roundedCoords.push(Math.round(parseInt(element, 10)));
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
            <LotrSpinner
                mapIsLoaded = {mapIsLoaded}
            />

            <div id="mapContainer">
                <button onClick={exportMapMarkers}>Export Markers</button>
                <MapContainer
                    zoomControl={false}
                    id="lotrMap"
                    bounds={mapBounds}
                    maxBounds={mapBounds}
                    maxBoundsViscosity={100}
                    scrollWheelZoom={true}
                    zoomAnimation={true}
                    center={mapBounds.getCenter()}
                    // zoomSnap={0.5}
                    zoomDelta={0.1}
                    maxZoom={3}
                    minZoom={-3}
                    zoom={0.5}
                    // wheelDebounceTime={0}
                    // wheelPxPerZoomLevel={360}
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
                                draggable={true}
                                position={marker.location}
                                eventHandlers={{
                                    dragend: handleMarkerDrag(marker)
                                }}
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