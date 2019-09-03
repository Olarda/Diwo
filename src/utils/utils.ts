export const numberWithDefault = (n: any, defaultValue: number): number =>
    (typeof n === 'number' && !isNaN(n)) ? n : defaultValue


const sec = 1000;
const min = 60 * sec;
const hrs = 60 * min;
const day = 24 * hrs;
const year = 365 * day;
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Fri'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


export const dateFormatting = (date: number): string => {
    const absoluteTimeDate = new Date(date);
    const time = new Date().getTime() - date;

    let result: string = '';

    switch (true) {
        case (time <= min):
            result = 'now';
            break;
        case (time <= hrs):
            result = `${Math.floor(time / min)}m`;
            break;
        case (time <= hrs * 3):
            result = `${Math.floor(time / hrs)}h`;
            break;
        case (time <= day):
            result = `${absoluteTimeDate.getHours()}:${absoluteTimeDate.getMinutes()}`;
            break;
        case (time <= day * 7):
            result = `${days[absoluteTimeDate.getDay()]}`;
            break;
        case (time <= year):
            result = `${absoluteTimeDate.getDate()} ${months[absoluteTimeDate.getMonth()]}`;
            break;
        default:
            result = `${new Date().getFullYear() - absoluteTimeDate.getFullYear()}y`;
            break;
    }

    return result;
};