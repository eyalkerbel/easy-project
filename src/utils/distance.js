import {RADIUS_EARTH} from "@/const"


export function calculateDistance(lat1, lon1, lat2, lon2) {
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const sphericalDistanceFactor =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const angularDistance = 2 * Math.atan2(Math.sqrt(sphericalDistanceFactor), Math.sqrt(1 - sphericalDistanceFactor));
    return RADIUS_EARTH * angularDistance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}