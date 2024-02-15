import {calculateDistance} from "@/utils/distance"


describe('calculateDistance', () => {
    it('calculates distance correctly between two points', () => {
        const paris = {lat: 48.8566, lon: 2.3522};
        const london = {lat: 51.5074, lon: -0.1278};
        const distance = calculateDistance(paris.lat, paris.lon, london.lat, london.lon);
        expect(distance).toBeCloseTo(344, 0);
    });

});