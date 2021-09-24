import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import { MAPBOX_API_TOKEN } from '../lib/constants';

export const LOTRMap = (props: any) => {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={MAPBOX_API_TOKEN}
        />
    );
};
