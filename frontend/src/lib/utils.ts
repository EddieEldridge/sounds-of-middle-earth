// import chalk from 'chalk';

import { MapLocation } from './interfaces';
import New_MapData from '../assets/json/New_MapData.json';
import OG_MapData from '../assets/json/OG_MapData.json';

export function getMapMarkers(version: string): MapLocation[] {
    let jsonMapData: MapLocation[] = [];

    if (version === 'og') {
        jsonMapData = JSON.parse(JSON.stringify(OG_MapData.locations));
    } else {
        jsonMapData = JSON.parse(JSON.stringify(New_MapData.locations));
    }

    return jsonMapData;
}

export function setupMapMarkerExport(mapMarkers: MapLocation[], keyCombination = 'KeyE') {
    // Variable to track last export time
    let lastExportTime = 0;
    const EXPORT_COOLDOWN = 1000; // 1 second cooldown between exports
    let isExporting = false;

    // Function to export map markers
    const exportMapMarkers = () => {
        // Prevent concurrent exports
        if (isExporting) {
            return;
        }

        const currentTime = Date.now();

        // Check if enough time has passed since last export
        if (currentTime - lastExportTime < EXPORT_COOLDOWN) {
            console.log('Export is on cooldown. Please wait.');

            return;
        }

        try {
            isExporting = true;

            const jsonOutput = {
                locations: mapMarkers
            };

            const jsonString = JSON.stringify(jsonOutput, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const link = document.createElement('a');

            link.href = URL.createObjectURL(blob);
            link.download = 'map_markers.json';

            // Ensure only one download
            link.setAttribute('download', 'map_markers.json');

            // Prevent event propagation
            link.addEventListener('click', (e) => {
                e.stopPropagation();
            }, { once: true });

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);

            // Update last export time
            lastExportTime = currentTime;
            console.log('Map markers exported successfully!');
        } catch (error) {
            console.error('Export failed:', error);
        } finally {
            // Always reset the exporting flag
            isExporting = false;
        }
    };

    // Add event listener for the keybind
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.code === keyCombination) {
            event.preventDefault(); // Prevent default key behavior
            event.stopPropagation(); // Stop event from bubbling

            // Use setTimeout to ensure event handling is clean
            setTimeout(exportMapMarkers, 0);
        }
    };

    // Use capture phase to prevent multiple listeners
    document.addEventListener('keydown', handleKeyPress, true);

    // Return a cleanup function to remove the event listener if needed
    return () => {
        document.removeEventListener('keydown', handleKeyPress, true);
    };
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