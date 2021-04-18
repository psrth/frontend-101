const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function refreshClock() {
    const TIME = new Date();
    
    const secondsDegree = TIME.getSeconds() * 6 + 90;
    second.style.transform = `rotate(${secondsDegree}deg)`

    const minutesDegree = TIME.getMinutes() * 6 + 90;
    minute.style.transform = `rotate(${minutesDegree}deg)`

    const hoursDegree = TIME.getHours() * 6 + 90;
    hour.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(refreshClock, 1000);