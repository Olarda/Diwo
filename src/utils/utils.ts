import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

export const numberWithDefault = (n: any, defaultValue: number): number =>
    (typeof n === 'number' && !isNaN(n)) ? n : defaultValue


export const dateFormatting = (date: string) => {
    dayjs.extend(relativeTime);
    dayjs.extend(LocalizedFormat);

    let type;
    let getMessageTime = dayjs(date);
    let now = dayjs();
    let time = now.diff(getMessageTime, "minute");

    if (time === 0) {
        type = 'now';
        return type
    }

    if (time < 60) {
        type = 'm';
        time = now.diff(getMessageTime, "minute");

        return time + type
    } else {
        type = "h";
        time = now.diff(getMessageTime, "hour");

        if (time > 3 && time < 24) {

            return dayjs(date).format('h:mm');
        }

        if (time > 24) {
            time = now.diff(getMessageTime, "day");
            type = "d";

            if (time < 3) {

                return dayjs(date).format('ddd');

            } else {

                time = now.diff(getMessageTime, "week");

                if (time < 52) {

                    return dayjs(date).format('D MMM');

                } else {
                    time = now.diff(getMessageTime, "year");
                    type = "y";

                }
            }

        }
        return time + type
    }

};