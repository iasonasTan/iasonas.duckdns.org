export function dateToString(date, title, secs) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0')
    if(!secs)
        return `${title}${hours}:${minutes}`;
    else
        return `${title}${hours}:${minutes}:${seconds}`;
}