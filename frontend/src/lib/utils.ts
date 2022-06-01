// import chalk from 'chalk';

import { MapLocation } from './interfaces';
import MapData from '../assets/json/MapData.json';

export function getMapLocation(): MapLocation[] {
    const jsonMapData: MapLocation[] = JSON.parse(JSON.stringify(MapData.locations));

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

export function getXyCoords(latLngString: string): string | undefined {
    try {
        return latLngString.match(/\(([^)]+)\)/)[1];
    } catch (error) {
        log(error, 'red');

        return undefined;
    }
}