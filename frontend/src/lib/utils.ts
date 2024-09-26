// import chalk from 'chalk';

import { MapLocation } from './interfaces';
import New_MapData from '../assets/json/New_MapData.json';
import OG_MapData from '../assets/json/OG_MapData.json';

export function getMapLocation(version: string): MapLocation[] {
    let jsonMapData: MapLocation[] = [];

    if (version === 'og') {
        jsonMapData = JSON.parse(JSON.stringify(New_MapData.locations));
    } else {
        jsonMapData = JSON.parse(JSON.stringify(OG_MapData.locations));
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