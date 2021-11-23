import { MapLocation } from './interfaces';
import MapData from '../assets/json/MapData.json';

export function getMapLocation(): MapLocation[] {
    const jsonMapData: MapLocation[] = JSON.parse(JSON.stringify(MapData.locations));

    return jsonMapData;
}