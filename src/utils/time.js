import {CLOSED_STRING, ON_DEMAND_STRING, OPEN_STRING} from "@/const"


export function getOpenStatus(openHours) {
    if (typeof openHours === 'string') {
        return handleStringFormat(openHours);
    } else if (Array.isArray(openHours)) {
        return handleArrayFormat(openHours);
    } else {
        return CLOSED_STRING
    }
}

function handleArrayFormat(openHours, currentDate = new Date()) {
    let dayOfWeek = currentDate.getDay();
    switch (openHours.length) {
        case 1:
            dayOfWeek = 0;
            break;
        case 3:
            if (dayOfWeek < 5) dayOfWeek = 0
            else if (dayOfWeek == 5) dayOfWeek = 1
            else dayOfWeek = 2
            break;
        default:
            break;
    }

    const todayHours = openHours[dayOfWeek];

    return handleHourInTodayHour(todayHours)
}

function handleHourInTodayHour(todayHours, currentDate = new Date()) {
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    if (!todayHours || todayHours[0] === "closed") {
        return CLOSED_STRING
    }
    for (let period of todayHours) {
        if (period.constructor === Array) {
            return CLOSED_STRING
        }
        const fromTimeParts = period?.from.split(':').map(Number);
        const toTimeParts = period?.to.split(':').map(Number);
        const openingTimeInMinutes = fromTimeParts[0] * 60 + fromTimeParts[1];
        const closingTimeInMinutes = toTimeParts[0] * 60 + toTimeParts[1];

        if (currentTimeInMinutes >= openingTimeInMinutes && currentTimeInMinutes < closingTimeInMinutes) {
            return OPEN_STRING
        }
    }

    return CLOSED_STRING;
}

function handleStringFormat(openHours) {
    switch (openHours) {
        case "24_7":
            return OPEN_STRING
        case "on_demand":
            return ON_DEMAND_STRING
        default:
            return CLOSED_STRING
    }
}

