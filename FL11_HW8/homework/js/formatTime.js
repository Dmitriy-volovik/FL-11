const formatTime = (minutes) => {
    let hour = Math.floor(minutes / 60) % 24;
    let day = (minutes / 60) / 24;
    day = Math.floor(day);
    return `${day} day(s) ${hour} hour(s) ${minutes % 60} minute(s). `
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
console.log(formatTime(585));
