// import chalk from 'chalk';

import { MapLocation } from './interfaces';
import MapData from '../assets/json/MapData.json';
import DaCMapData from '../assets/json/DaCMapData.json';
import AGOMapData from '../assets/json/AGOMapData.json';
import CreaperMapData from '../assets/json/CreaperMapData.json';
import JaredMapData from '../assets/json/JaredBlandoMapData.json';

export function getMapLocation(mapType: string): MapLocation[] {
    let jsonMapData: MapLocation[];

    switch (mapType) {
        case 'default':
            jsonMapData = JSON.parse(JSON.stringify(MapData.locations));
            break;
        case 'siu_dac':
            jsonMapData = JSON.parse(JSON.stringify(DaCMapData.locations));
            break;
        case 'siu_ago':
            jsonMapData = JSON.parse(JSON.stringify(AGOMapData.locations));
            break;
        case 'creaperbox':
            jsonMapData = JSON.parse(JSON.stringify(CreaperMapData.locations));
            break;
        case 'jared':
            jsonMapData = JSON.parse(JSON.stringify(JaredMapData.locations));
            break;
        default:
            jsonMapData = JSON.parse(JSON.stringify(MapData.locations));
            break;
    }

    return jsonMapData;
}

export function log(message: any, colour?: string) {
    switch (colour) {
        // case 'blue':
        //     console.log(chalk.blue(message));
        //     break;
        // case 'green':
        //     console.log(chalk.green(message));
        //     break;
        // case 'red':
        //     console.log(chalk.red(message));
        //     break;
        // case 'yellow':
        //     console.log(chalk.yellow(message));
        //     break;
        default:
            console.log(message);
            break;
    }
}

export function getXyCoords(latLngString: string): string[] {
    try {
        const match = latLngString.match(/\(([^)]+)\)/);

        if(match) {
            return match[1].split(',');
        } else {
            return [];
        }
    } catch (error) {
        log(error, 'red');
    }
}