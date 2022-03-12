import L from 'leaflet';

import lotrPin from '../../assets/img/Map_Pin.png';

const iconLOTR = new L.Icon({
    iconUrl: lotrPin,
    iconRetinaUrl: lotrPin,
    iconSize: [30,45],
});

export { iconLOTR };