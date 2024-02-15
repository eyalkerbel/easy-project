import {getOpenStatus} from "@/utils/time"
import {CLOSED_STRING, OPEN_STRING} from "@/const"


describe('getOpenStatus', () => {
    it('returns OPEN_STRING for "24_7"', () => {
        expect(getOpenStatus("24_7")).toBe("open");
    });
    it('returns open during regular hours', () => {
        const openHours = [{from: "09:00", to: "17:00"}, [], [], [], [], [], []];
        jest.useFakeTimers().setSystemTime(new Date("2024-02-14T08:00:00Z"));
        expect(getOpenStatus(openHours)).toBe(CLOSED_STRING);
        jest.useRealTimers();
    });

    it('returns open regular hours - 7 items in array', () => {
        const openHours = [[], [], [], [{from: "09:00", to: "17:00"}], [], [], []];
        jest.useFakeTimers().setSystemTime(new Date('2024-02-14T10:00:00Z'));
        expect(getOpenStatus(openHours)).toBe(OPEN_STRING);
        jest.useRealTimers();
    });
    it('returns open regular hours - 3 items in array', () => {
        const openHours = [[{from: "09:00", to: "17:00"}], [], []];
        jest.useFakeTimers().setSystemTime(new Date('2024-02-14T10:00:00Z'));
        expect(getOpenStatus(openHours)).toBe(OPEN_STRING);
        jest.useRealTimers();
    });
    it('returns open regular hours - 1 items in array', () => {
        // Using the same openHours as above for simplicity
        const openHours = [[{from: "09:00", to: "17:00"}]];
        jest.useFakeTimers().setSystemTime(new Date('2024-02-14T10:00:00Z'));
        expect(getOpenStatus(openHours)).toBe(OPEN_STRING);
        jest.useRealTimers();
    });
})