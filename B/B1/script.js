const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function refreshClock() {
    const TIME = new Date();
    
    const seconds = TIME.getSeconds();
    const minutes = TIME.getMinutes();
    const hours = TIME.getHours();

    const secondsDegree = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secondsDegree}deg)`

    const minutesDegree = ((minutes / 60) * 360) + 90;
    minute.style.transform = `rotate(${minutesDegree}deg)`

    const hoursDegree = ((hours / 60) * 360) + 90;
    hour.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(refreshClock, 1000);