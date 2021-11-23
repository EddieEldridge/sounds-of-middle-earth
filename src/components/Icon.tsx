import L from 'leaflet';

import lotrPin from '../assets/img/map_pin.svg';

const iconLOTR = new L.Icon({
    iconUrl: lotrPin,
    iconRetinaUrl: lotrPin,
    iconSize: [30,30],
});

export { iconLOTR };