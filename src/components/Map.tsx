import { ImageOverlay, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { CRS, LatLngBounds } from 'leaflet';
import { useState } from 'react';

const bounds = new LatLngBounds([500.712216, -500.22655], [500.773941, -500.12544])


export const LOTRMap = (props: any) => {
    const [map, setMap] = useState(undefined)

    const setMapReference = (map) => {
        setMap(map);
        map.fitBounds(bounds);
    }

    return (
        <MapContainer whenCreated={setMapReference} crs={CRS.Simple}>
            <ImageOverlay
                url="https://i.pinimg.com/originals/bc/59/91/bc5991a551a011777e72aefa7e914ba8.jpg"
                bounds={bounds}
            />
        </MapContainer>
    );
};
