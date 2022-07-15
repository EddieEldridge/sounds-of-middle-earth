import L from 'leaflet';

import lotrPin from '../../assets/img/pushpin.png';

const iconLOTR = new L.Icon({
    iconUrl: lotrPin,
    iconRetinaUrl: lotrPin,
    iconSize: [38,38],
});

export { iconLOTR };