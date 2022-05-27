export function convertCookTime(seconds: number) {
    const minutes = seconds / 60
    const hours = minutes / 60
    if (hours >= 1) return `${hours} hours`
    else return `${minutes} min`
}
